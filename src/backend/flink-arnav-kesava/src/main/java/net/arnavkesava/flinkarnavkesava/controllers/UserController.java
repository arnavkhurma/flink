// UserController.java
package net.arnavkesava.flinkarnavkesava.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.arnavkesava.flinkarnavkesava.models.User;
import net.arnavkesava.flinkarnavkesava.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User userDto) {
    	userService = new UserService();
        try {
            // Validate userDto and process user creation
            userService.saveUser(userDto);
            return new ResponseEntity<>("User successfully created", HttpStatus.OK);
        } catch (Exception e) {
            // Handle errors and return an appropriate response
            return new ResponseEntity<>("Failed to create user: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
