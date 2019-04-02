package events;

import il.ac.bgu.cs.bp.bpjs.model.BEvent;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentTime extends BEvent {

    public String currentTime;

    public CurrentTime() {
        super("Reached Date", new CurrentTimeData());
        this.currentTime = new SimpleDateFormat("MM/dd/YYY hh:mm aa").format(new Date()).toString();
    }
}
