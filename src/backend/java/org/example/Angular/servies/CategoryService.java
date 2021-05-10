package org.example.Angular.servies;

import org.example.Angular.entities.Category;
import org.example.Angular.repositories.CategoryRepository;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    public Category addCategory(String name){
        return categoryRepository.save(new Category(name));
    }

    public Category updateCategory(int id, String name){
        Optional<Category> category = categoryRepository.findById(id);
        if(!category.isPresent())
            return null;

        category.get().setName(name);

        return categoryRepository.save(category.get());
    }

    public void deleteCategory(Category category){
        Optional<Category> defaultCategory = categoryRepository.findById(1);
        if(!defaultCategory.isPresent())
            return;

        category.getSubCategories().forEach(x -> x.setCategory(defaultCategory.get()));
        categoryRepository.delete(category);
    }

    @PostConstruct
    public void onInit(){
        if(categoryRepository.findByName("Default").isPresent())
            return;

        categoryRepository.save(new Category("Default"));
    }
}