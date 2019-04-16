package hackbgu.bgu.ac.il.services;

import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;

import hackbgu.bgu.ac.il.model.*;

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

    private static TypeReference<List<Forum>> com_fasterxml_jackson_core_type_TypeReference_java_util_List_hackbgu_bgu_ac_il_model_Forum(){
        return new TypeReference<List<Forum>>() {
            //Empty
        };
    }

    private static TypeReference<List<Message>> com_fasterxml_jackson_core_type_TypeReference_java_util_List_hackbgu_bgu_ac_il_model_Message(){
        return new TypeReference<List<Message>>() {
            //Empty
        };
    }

    private static TypeReference<List<Assignment>> com_fasterxml_jackson_core_type_TypeReference_java_util_List_hackbgu_bgu_ac_il_model_Assignment(){
        return new TypeReference<List<Assignment>>() {
            //Empty
        };
    }

    private static TypeReference<List<Resource>> com_fasterxml_jackson_core_type_TypeReference_java_util_List_hackbgu_bgu_ac_il_model_Resource(){
        return new TypeReference<List<Resource>>() {
            //Empty
        };
    }
}
