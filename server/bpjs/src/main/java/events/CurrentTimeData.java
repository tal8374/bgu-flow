package events;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentTimeData {

    public String currentTime;

    public CurrentTimeData() {
        this.currentTime = new SimpleDateFormat("MM/dd/YYY h:mm aa").format(new Date()).toString();
    }
}
