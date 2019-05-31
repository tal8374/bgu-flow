package flow.bgu.ac.il;

import java.io.IOException;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLConnection;

import javax.net.ssl.HttpsURLConnection;

import org.eclipse.jetty.util.log.Log;
import org.eclipse.jetty.util.log.Logger;

import il.ac.bgu.cs.bp.bpjs.execution.BProgramRunner;
import il.ac.bgu.cs.bp.bpjs.execution.listeners.BProgramRunnerListenerAdapter;
import il.ac.bgu.cs.bp.bpjs.model.BEvent;
import il.ac.bgu.cs.bp.bpjs.model.BProgram;

public class IFTTTReporter {
	private static final Logger LOG = Log.getLogger(IFTTTReporter.class);

	public static void listenTo(BProgramRunner rnr) {
		rnr.addListener(new BProgramRunnerListenerAdapter() {
			public void eventSelected(BProgram bp, BEvent event) {
				sendToIFTTT(event.name);
			}

		});
	}

	static private void sendToIFTTT(String name) {

		try {
			URL url = new URL("https://maker.ifttt.com/trigger/BPEvent/with/key/3hESrTy8_v6hRvXSerrDS");
			URLConnection con = url.openConnection();
			HttpsURLConnection http = (HttpsURLConnection) con;
			http.setRequestMethod("POST");
			http.setDoOutput(true);

			String str = "{\"value1\":\"" + name + "\"}";
			byte[] out = str.getBytes();

			int length = out.length;

			http.setFixedLengthStreamingMode(length);
			http.setRequestProperty("Content-Type", "application/json");
			http.connect();
			LOG.info("Sent request with data " + str);
			OutputStream os = http.getOutputStream();
			os.write(out);
			LOG.info("Status " + http.getResponseCode());
		} catch (IOException e) {
			LOG.warn(e);
		}
	}

}
