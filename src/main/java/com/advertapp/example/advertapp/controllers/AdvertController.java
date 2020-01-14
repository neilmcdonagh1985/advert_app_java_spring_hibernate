package com.advertapp.example.advertapp.controllers;

import com.advertapp.example.advertapp.models.Advert;
import com.advertapp.example.advertapp.repositories.AdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/adverts")
public class AdvertController {

    @Autowired
    AdvertRepository advertRepository;

    @GetMapping(value = "/categories/named/{name}")
    public List<Advert> findAdvertsThatHaveCategoryNamed( @PathVariable String name ) {
        return advertRepository.findAdvertsThatHaveCategoryNamed(name);
    }

    @GetMapping(value = "/sellers/named/{name}")
    public List<Advert> findAdvertsThatHaveSellerNamed( @PathVariable String name) {
        return advertRepository.findAdvertsThatHaveSellerNamed(name);
    }


}
