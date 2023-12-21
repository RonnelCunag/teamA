package com.teama.teama.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teama.teama.model.User;
import com.teama.teama.repository.UserRepository;

@RestController
@RequestMapping("/user") // Adding a base mapping for all endpoints in this controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        System.out.println("Registering user: " + user.getEmail());
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            System.out.println("User already exists: " + user.getEmail());
            return "redirect:/user/register?error";
        }

        userRepository.save(user);
        System.out.println("User registered successfully: " + user.getEmail());
        return "redirect:/user/login";
    }

    @GetMapping("/users")
    public List<User> showUserList(Model model) {
    List<User> userList = userRepository.findAll();
    model.addAttribute("userList", userList);
    return userRepository.findAll(); // Return the user list view
}

}
