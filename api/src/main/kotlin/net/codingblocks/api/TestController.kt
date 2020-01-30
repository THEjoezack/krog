package net.api

import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.security.oauth2.jwt.Jwt
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.security.Principal

@RestController
internal class TestRestController {

    @GetMapping("/api/name")
    fun getSimple(principal: Principal?): List<String> { // handle request
        return listOf(principal?.name.toString())
    }

    @GetMapping("/api/claims")
    @PreAuthorize("hasAuthority('Admins')")
    fun getAdminList(principal: Principal?): List<String> { // handle request
        val token = principal as JwtAuthenticationToken
        val jwt = token.credentials as Jwt
        return jwt.claims.keys.toList()
    }
}