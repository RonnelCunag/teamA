package com.teama.teama.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.teama.teama.repository.model.User;
import com.teama.teama.repository.UserRepository;

@RestController
public class UserController {

    @Autowired
    private UserRepository

    @PostMapping("/user")
    User newUser(@RequestBody User newUser)
}
