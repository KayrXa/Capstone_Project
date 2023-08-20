package com.project.repo;

import org.springframework.data.repository.CrudRepository;

import com.project.entity.Admin;

public interface AdminRepo extends CrudRepository<Admin, String> {

    public Admin findByAdname(String adname);
    
}
