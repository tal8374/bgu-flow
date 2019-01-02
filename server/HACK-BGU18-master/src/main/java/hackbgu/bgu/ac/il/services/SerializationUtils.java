package hackbgu.bgu.ac.il.services;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

public class SerializationUtils {
	protected final ObjectMapper mapper;
	
	public interface SubtypesRegistry {
		List<Class<?>> getSubtypes();
	}

	public SerializationUtils() {
		mapper = new ObjectMapper(); //This is thread safe
		mapper.enable(SerializationFeature.INDENT_OUTPUT);
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	}
	
	public String serialize(Object object) throws JsonProcessingException {
		try {
			return mapper.writerWithDefaultPrettyPrinter().writeValueAsString(object);
		}
		catch (JsonProcessingException e) {
			throw e;
		}
	}
	
	public <T> T deserialize(String json, Class<T> clazz) throws IOException {
		try {
			if ((!String.class.equals(clazz)) && (StringUtils.isBlank(json))) {
				return null;
			}
			return mapper.readValue(json, clazz);
		}
		catch (IOException e) {
			throw e;
		}
	}
	
	public Object deserializeGeneric(String json, Class<?> serializationHelper, Class<?> generic, Class<?> genericReturnType) throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, IOException, JsonParseException, JsonMappingException {
		String staticMethodNameForGettingTypeReference = (TypeReference.class.getName()+'_'+generic.getName()+'_'+genericReturnType.getName()).replace('.', '_');
		Method staticMethodForGettingTypeReference = serializationHelper.getDeclaredMethod(staticMethodNameForGettingTypeReference);
		staticMethodForGettingTypeReference.setAccessible(true);
 		@SuppressWarnings("rawtypes")
		TypeReference valueTypeRef = (TypeReference) staticMethodForGettingTypeReference.invoke(null, (Object[])null);
		Object result = getObjectMapper().readValue(json, valueTypeRef);
		return result;
	}

	public ObjectMapper getObjectMapper() {
		return mapper;
	}
}