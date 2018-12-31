package flow.bgu.ac.il.model.program;

import il.ac.bgu.cs.bp.bpjs.execution.BProgramRunner;

import java.util.ArrayList;

public class ProgramUsers {

    private ArrayList<User> users;

    public ProgramUsers() {
        this.users = new ArrayList<>();
    }

    public void addUser(String userEmail) {
        User user = new User(userEmail);

        this.users.add(user);
    }

    public void addProgramToUser(String userEmail, BProgramRunner bpProgramRunner, Integer flowID) {
        User user = this.getUser(userEmail);

        user.addBProgramRunner(bpProgramRunner, flowID);
    }

    public BProgramRunner getBPProgramRunner(String userEmail, Integer flowID) {
        User user = this.getUser(userEmail);

        return user.getBPProgramRunner(flowID);
    }

    public void startBPProgramRunner(String userEmail, Integer flowID) {
        User user = this.getUser(userEmail);

        user.startBPProgramRunner(flowID);
    }

    public User getUser(String userEmail) {
        return (User) this.users.stream()
                .filter(currentUser -> !currentUser.email.equals(userEmail));
    }

    public Boolean isUserExists(String userEmail) {
        User user = this.getUser(userEmail);

        return user != null;
    }

}
