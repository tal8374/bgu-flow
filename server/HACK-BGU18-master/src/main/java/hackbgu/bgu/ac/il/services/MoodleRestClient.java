package hackbgu.bgu.ac.il.services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLEncoder;

public class MoodleRestClient {
    /**
     * Do a REST call to Moodle. Result are displayed in the console log.
     * @param args the command line arguments
     */
	
	private final String Token = "99f30beba89fa6fa280f33c971465746";
    private final String DomainName = "http://bpcoders.elyasaf.net";
	
	public MoodleRestClient(){
		
	}
	
	public String sendRest(String func) throws IOException{
		// Send request
        String serverurl = DomainName + "/webservice/rest/server.php" + "?wstoken=" + Token + "&moodlewsrestformat=json&wsfunction=" + func;
        System.out.println(serverurl);
        HttpURLConnection con = (HttpURLConnection) new URL(serverurl).openConnection();
        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type",
           "application/x-www-form-urlencoded");
        con.setRequestProperty("Content-Language", "en-US");
        con.setDoOutput(true);
        con.setUseCaches (false);
        con.setDoInput(true);
//        DataOutputStream wr = new DataOutputStream (
//                  con.getOutputStream ());
//        wr.writeBytes (urlParameters);
//        wr.flush ();
//        wr.close ();

        //Get Response
        InputStream is =con.getInputStream();
        BufferedReader rd = new BufferedReader(new InputStreamReader(is));
        String line;
        StringBuilder response = new StringBuilder();
        while((line = rd.readLine()) != null) {
            response.append(line);
            response.append('\r');
        }
        rd.close();
        System.out.println(response.toString());
        return response.toString();
	}
	
    public static void main(String[] args) throws ProtocolException, IOException {
        MoodleRestClient client = new MoodleRestClient();
        client.sendRest(MoodleOperation.getUserByField.getOperation() + "&field=username&values%5B0%5D=mgenah");
//        client.sendRest(MoodleOperation.listUserCourses.getOperation() + "&userid=" + 3);
//        client.sendRest(MoodleOperation.getCourses.getOperation()+URLEncoder.encode("options[ids]["+0+"]", "UTF-8") + "=3");// + "&field=idnumber&values%5B0%5D=11111");
    }
}
