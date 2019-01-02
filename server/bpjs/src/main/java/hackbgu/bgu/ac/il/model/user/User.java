package hackbgu.bgu.ac.il.model.user;

import il.ac.bgu.cs.bp.bpjs.execution.BProgramRunner;

import java.util.HashMap;
import java.util.Map;

public class User {

    public String email;
    private Map<Integer, BProgramRunner> flows = new HashMap<>();

    public User(String email) {
        this.email = email;
    }

    public void addBProgramRunner(BProgramRunner bpProgram, Integer flowID) {
        this.flows.put(flowID, bpProgram);
    }

    public BProgramRunner getBPProgramRunner(Integer flowID) {
        return this.flows.get(flowID);
    }

    public void startBPProgramRunner(Integer flowID) {
        BProgramRunner bpProgramRunner = this.getBPProgramRunner(flowID);

        bpProgramRunner.run();
    }

    @Override
    public boolean equals(Object o) {

        if (o == this) {
            return true;
        }

        if (!(o instanceof User)) {
            return false;
        }

        User u = (User) o;

        return u.email.equals(this.email);
    }

    @Override
    public int hashCode() {
        return this.email.hashCode();
    }

}
