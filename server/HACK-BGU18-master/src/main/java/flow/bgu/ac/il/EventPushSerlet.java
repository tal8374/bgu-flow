package flow.bgu.ac.il;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import il.ac.bgu.cs.bp.bpjs.model.BEvent;

public class EventPushSerlet extends HttpServlet {

	final static Logger LOG = LoggerFactory.getLogger(EventPushSerlet.class);

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		BufferedReader br = request.getReader();
		String name = IOUtils.toString(br);
		if(RunServlet.bprog != null)
			RunServlet.bprog.enqueueExternalEvent(new BEvent(name));
		else
			LOG.warn("Event " + name + " is ignored because there is no active deployment");

	}

}
