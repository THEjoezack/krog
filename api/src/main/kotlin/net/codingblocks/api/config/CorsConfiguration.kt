package net.api.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class CorsConfiguration : WebMvcConfigurer {

    @Value("\${origins.allowed}")
    private var origins:String = ""

    override fun addCorsMappings(registry: CorsRegistry) {
        origins.split(",").forEach {
            registry.addMapping("/**")
                    .allowedOrigins(it)
        }
    }
}