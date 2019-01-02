package hackbgu.bgu.ac.il.services;

import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;

import hackbgu.bgu.ac.il.model.Course;
import hackbgu.bgu.ac.il.model.User;

public class TypeReferenceSerializationHelper {	
	private static TypeReference<List<User>> com_fasterxml_jackson_core_type_TypeReference_java_util_List_hackbgu_bgu_ac_il_model_User(){
        return new TypeReference<List<User>>() {
            //Empty
        };
    }
	
	private static TypeReference<List<Course>> com_fasterxml_jackson_core_type_TypeReference_java_util_List_hackbgu_bgu_ac_il_model_Course(){
        return new TypeReference<List<Course>>() {
            //Empty
        };
    }
}
