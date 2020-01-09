package com.advertapp.example.advertapp.repositories;

import com.advertapp.example.advertapp.models.Seller;
import com.advertapp.example.advertapp.projections.EmbedAdvertsInSeller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedAdvertsInSeller.class)
public interface SellerRepository extends JpaRepository<Seller, Long> {

}
