package com.advertapp.example.advertapp.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="adverts")
public class Advert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="description")
    private String description;

    @JsonIgnoreProperties("adverts")
    @ManyToOne
    @JoinColumn(name="seller_id", nullable = false)
    private Seller seller;

    public Advert(String description, Seller seller) {
        this.description = description;
        this.seller = seller;

    }

    public Advert() {

    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }
}
