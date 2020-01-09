package com.advertapp.example.advertapp.repositories;

import com.advertapp.example.advertapp.models.Seller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Long> {

}
