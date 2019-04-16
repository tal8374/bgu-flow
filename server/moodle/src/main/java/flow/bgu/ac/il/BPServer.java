package flow.bgu.ac.il;

import javax.websocket.server.ServerEndpointConfig;

import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.websocket.jsr356.server.ServerContainer;
import org.eclipse.jetty.websocket.jsr356.server.deploy.WebSocketServerContainerInitializer;

import hackbgu.bgu.ac.il.services.DashboardServlet;

public class BPServer {
	private Server server;

	public void init(String[] arguments) throws Exception {
		int port = 8090;
		if(arguments.length > 0) {
			port = Integer.parseInt(arguments[0]);
		}
		server = new Server(port); 

		// Servlets
		ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
		context.setContextPath("/");
		server.setHandler(context);

		context.addServlet(new ServletHolder(new SaveServlet()), "/save");
		//context.addServlet(new ServletHolder(new ExportServlet()), "/export");
		context.addServlet(new ServletHolder(new FlowOpenServlet()), "/open");
		context.addServlet(new ServletHolder(new RunServlet()), "/run");
		context.addServlet(new ServletHolder(new EventPushSerlet()), "/push");
		
		
		context.addServlet(new ServletHolder(new DashboardServlet()), "/dashboard/users/*");
		context.addServlet(new ServletHolder(new DashboardServlet()), "/dashboard/courses/*");

		ResourceHandler fileHandler = new ResourceHandler();
		fileHandler.setResourceBase(".");

		// Add javax.websocket support
        ServerContainer container = WebSocketServerContainerInitializer.configureContext(context);

        // Add endpoint to server container
        ServerEndpointConfig cfg = ServerEndpointConfig.Builder.create(EventQueue.class,"/eventqueue").build();
        container.addEndpoint(cfg);
		
		HandlerList handlers = new HandlerList();


		handlers.setHandlers(new Handler[] { fileHandler, context});
		server.setHandler(handlers);

		System.out.println(">> Go to http://localhost:" + port + "/editor/index.html");
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
