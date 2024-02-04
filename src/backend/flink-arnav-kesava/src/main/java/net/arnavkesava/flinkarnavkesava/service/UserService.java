// UserService.java
package net.arnavkesava.flinkarnavkesava.service;

import org.springframework.stereotype.Service;

import net.arnavkesava.flinkarnavkesava.models.User;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

@Service("userService")
public class UserService {

    private final String CSV_FILE_PATH = "Passwords.csv";

    public User saveUser(User user) {
        List<User> userList = readUsersFromFile();
        userList.add(user);
        writeUsersToFile(userList);
        return user;
    }

    private List<User> readUsersFromFile() {
        List<User> userList = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(CSV_FILE_PATH))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");
                User user = new User(values[0], values[1], values[2]);
                userList.add(user);
            }
        } catch (IOException e) {
            // Handle IOException
            e.printStackTrace();
        }
        return userList;
    }

    private void writeUsersToFile(List<User> userList) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(CSV_FILE_PATH))) {
            for (User user : userList) {
                bw.write(String.format("%s,%s,%s,%s\n",
                        user.getUsername(), user.getEmail(), user.getPasswords()));
            }
        } catch (IOException e) {
            // Handle IOException
            e.printStackTrace();
        }
    }
}
