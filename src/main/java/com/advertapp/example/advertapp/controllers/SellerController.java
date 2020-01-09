package com.advertapp.example.advertapp.controllers;
import com.advertapp.example.advertapp.models.Seller;
import com.advertapp.example.advertapp.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/sellers")
public class SellerController {
    @Autowired
    SellerRepository sellerRepository;

    @GetMapping("{id")
    public Optional<Seller> getSeller(@PathVariable Long id) {
        return sellerRepository.findById(id);

    }
}
