package com.advertapp.example.advertapp.repositories;

import com.advertapp.example.advertapp.models.Advert;
import com.advertapp.example.advertapp.projections.EmbedCategories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedCategories.class)
public interface AdvertRepository extends JpaRepository<Advert, Long>, AdvertRepositoryCustom {



}
