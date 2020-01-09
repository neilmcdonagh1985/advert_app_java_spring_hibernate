package com.advertapp.example.advertapp.repositories;

import com.advertapp.example.advertapp.models.Advert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdvertRepository extends JpaRepository<Advert, Long> {

}
