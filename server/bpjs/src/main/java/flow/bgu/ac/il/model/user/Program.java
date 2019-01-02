package flow.bgu.ac.il.model.user;

import il.ac.bgu.cs.bp.bpjs.execution.BProgramRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Program {

    private ArrayList<User> users = new ArrayList<>();

    private static final Program program = new Program();

    private Program() {
    }

    public static Program getInstance() {
        return program;
    }

    public void addUser(String userEmail) {
        if (isUserExists(userEmail)) return;

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
        List<User> users = this.users.stream()
                .filter(currentUser -> currentUser.email.equals(userEmail))
                .collect(Collectors.toList());

        if (users.size() == 1) {
            return users.get(0);
        } else {
            return null;
        }
    }

    public Boolean isUserExists(String userEmail) {
        User user = this.getUser(userEmail);

        return user != null;
    }

}
