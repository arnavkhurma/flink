package net.arnavkesava.flinkarnavkesava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import net.arnavkesava.flinkarnavkesava.service.UserService;

@SpringBootApplication
@ComponentScan({"net.arnavkesava.flinkarnavkesava.services", "net.arnavkesava.flinkarnavkesava.controllers"})
@RestController
public class FlinkArnavKesavaApplication {
    
    @GetMapping("/welcome")
    public String welcome() {
        return "Spring Boot Flink";
    }
    
	public static void main(String[] args) {
		SpringApplication.run(FlinkArnavKesavaApplication.class, args);
	}
}
