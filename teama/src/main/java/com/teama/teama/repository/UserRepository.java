package com.teama.teama.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teama.teama.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
