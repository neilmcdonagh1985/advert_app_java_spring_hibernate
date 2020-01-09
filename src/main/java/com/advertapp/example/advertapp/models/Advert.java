package com.advertapp.example.advertapp.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "adverts")
public class Advert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "description")
    private String description;

    @JsonIgnoreProperties("adverts")
    @ManyToOne
    @JoinColumn(name = "seller_id",  nullable = false)
    private Seller seller;

    @JsonIgnoreProperties("adverts")
    @ManyToMany
    @JoinTable(
            name = "adverts_categories",
            joinColumns = { @JoinColumn(
                    name = "advert_id",
                    nullable = false,
                    updatable = false
            )},
            inverseJoinColumns = { @JoinColumn(
                    name = "category_id",
                    nullable = false,
                    updatable = false
            )}
    )
    private List<Category> categories;

    public Advert(String description) {
        this.description = description;
    }

    public Advert() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
