package hackbgu.bgu.ac.il.services;

import java.io.IOException;
import java.util.concurrent.Callable;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.jetty.util.log.Log;
import org.eclipse.jetty.util.log.Logger;

public class DashboardServlet extends HttpServlet {
	private static final Logger LOG = Log.getLogger(DashboardServlet.class);
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -1598336877581962216L;

	private MoodleService moodleService = new MoodleServiceImpl();

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String requestURI = request.getRequestURI().substring(StringUtils.indexOf(request.getRequestURI(),"/")+1);
		String responseContent = handleRequest(requestURI);
		
		response.setContentType("application/json;charset=UTF-8");
		response.setHeader("Pragma", "no-cache"); // HTTP 1.0
		response.setHeader("Cache-control", "private, no-cache, no-store");
		response.setHeader("Expires", "0");

		response.setStatus(HttpServletResponse.SC_OK);
		response.getWriter().write(responseContent);
		response.getWriter().flush();
		response.getWriter().close();
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String requestURI2 = request.getRequestURI().substring(1);
		String requestURI = requestURI2.substring(StringUtils.indexOf(requestURI2,"/")+1);
		String responseContent = handleRequest(requestURI);
		
		response.setContentType("application/json;charset=UTF-8");
		response.setHeader("Pragma", "no-cache"); // HTTP 1.0
		response.setHeader("Cache-control", "private, no-cache, no-store");
		response.setHeader("Expires", "0");

		response.setStatus(HttpServletResponse.SC_OK);
		response.getWriter().write(responseContent);
		response.getWriter().flush();
		response.getWriter().close();
	}

	private String handleRequest(String requestURI) {
		String[] reqParsed = StringUtils.split(requestURI, "/");
		
		if (reqParsed[0].equals("courses")){
			return runInMoodle(()->moodleService.getCourse(reqParsed[1]));
		}
		else if (reqParsed[0].equals("users")){
			if (reqParsed.length == 2){
				return runInMoodle(()->moodleService.getUser(reqParsed[1]));
			}
//			else if (reqParsed.length == 4){
//				return runInMoodle(()->moodleService.listCoursesOfUser(reqParsed[1]));
//			}
		}
		return null;
	}
	
	private String runInMoodle(Callable<?> op){
		try {
			return (String)op.call();
		} catch (Exception e) {
			LOG.warn(e);
			return null;
		}
	}
}
