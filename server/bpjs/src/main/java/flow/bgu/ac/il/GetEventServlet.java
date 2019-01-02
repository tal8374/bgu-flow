package flow.bgu.ac.il;
/**
 * Copyright (c) 2011-2012, JGraph Ltd
 */

import com.google.gson.Gson;
import hackbgu.bgu.ac.il.model.requestBody.GetEventBody;
import hackbgu.bgu.ac.il.model.user.Program;
import hackbgu.bgu.ac.il.model.user.User;
import il.ac.bgu.cs.bp.bpjs.execution.BProgramRunner;
import il.ac.bgu.cs.bp.bpjs.model.BEvent;
import il.ac.bgu.cs.bp.bpjs.model.BProgram;
import org.apache.commons.io.IOUtils;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

/**
 * Servlet implementation class SaveServlet.
 * <p>
 * The SaveDialog in Dialogs.js implements the user interface. Editor.saveFile
 * in Editor.js implements the request to the server. Note that this request
 * is carried out in a separate iframe in order to allow for the response to
 * be handled by the browser. (This is required in order to bring up a native
 * Save dialog and save the file to the local filestyem.) Finally, the code in
 * this servlet echoes the XML and sends it back to the client with the
 * required headers (see Content-Disposition in RFC 2183).
 */
public class GetEventServlet extends HttpServlet {

    {
        System.out.println("GetEventServlet is active");
    }

    /**
     *
     */
    private static final long serialVersionUID = -5308353652899057537L;

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws ServletException, IOException {

        GetEventBody getEventBody = this.createGetEventBody(request);

        String eventName = getEventBody.eventName;
        String userEmail = getEventBody.userEmail;

        System.out.println("New event - " + eventName);

        Program program = Program.getInstance();
        User user = program.getUser(userEmail);

        sendEventToUserBPPrograms(user, eventName);

        response.setStatus(HttpServletResponse.SC_OK);
    }

    private void sendEventToUserBPPrograms(User user, String eventName) {
        Map<Integer, BProgramRunner> userFlows = user.flows;

        for (Map.Entry<Integer, BProgramRunner> entry : userFlows.entrySet()) {
            BProgramRunner userBProgramRunner = entry.getValue();
            BProgram userBProgram = userBProgramRunner.getBProgram();
            userBProgram.enqueueExternalEvent(new BEvent(eventName));
        }
    }

    private GetEventBody createGetEventBody(HttpServletRequest request) throws IOException {
        String body = IOUtils.toString(request.getReader());
        body = String.join("", body.split("\n"));

        Gson gson = new Gson();
        return gson.fromJson(body, GetEventBody.class);
    }

}