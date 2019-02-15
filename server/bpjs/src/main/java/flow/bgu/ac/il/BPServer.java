package flow.bgu.ac.il;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;

public class BPServer {
	private Server server;

	public void init(String[] arguments) throws Exception {
		int port = 7000;
		server = new Server(port);

		// Servlets
		ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
		context.setContextPath("/");
		server.setHandler(context);

		context.addServlet(new ServletHolder(new SaveServlet()), "/save");
	}

	public void start() throws Exception {
		server.start();
	}

	public void stop() throws Exception {
		server.stop();
	}

	public void join() throws Exception {
		server.join();
	}

	public void destroy() throws Exception {

	}

	/**
	 * Point your browser to the displayed URL
	 */
	public static void main(String[] args) throws Exception {
		BPServer bpserver = new BPServer();
		bpserver.init(args);
		bpserver.start();
		bpserver.join();
		bpserver.stop();
	}
}
