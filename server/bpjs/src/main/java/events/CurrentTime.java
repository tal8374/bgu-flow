package events;

import il.ac.bgu.cs.bp.bpjs.model.BEvent;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentTime extends BEvent {

    public String currentTime;

    public CurrentTime() {
        super("Reached_Date", "{\"date\": \"" +
                new SimpleDateFormat("MM/dd/YYY h:m aa").format(new Date()).toString() + "\"}");
    }
}
