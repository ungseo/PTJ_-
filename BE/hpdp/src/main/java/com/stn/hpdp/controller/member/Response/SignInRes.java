package com.stn.hpdp.controller.member.Response;

import com.stn.hpdp.model.entity.Member;
import lombok.*;

import java.util.Set;
import java.util.stream.Collectors;

@Data
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignInRes {

    private String loginId;

    private String name;

    private Set<AuthorityRes> authorityDtoSet;

    public static SignInRes from(Member member) {
        if (member == null) return null;

        return SignInRes.builder()
                .loginId(member.getLoginId())
                .name(member.getName())
                .authorityDtoSet(member.getAuthorities().stream()
                        .map(authority -> AuthorityRes.builder().authorityName(authority.getAuthorityName()).build())
                        .collect(Collectors.toSet()))
                .build();
    }
}