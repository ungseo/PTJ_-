package com.stn.hpdp.model.repository;

import com.stn.hpdp.model.entity.FundingHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FundingHistoryRepository extends JpaRepository<FundingHistory, Long> {
    List<FundingHistory> findAllByMember_Id(Long memberId);

    FundingHistory findByFunding_Id(Long fundingId);

    List<FundingHistory> findAllByFunding_Id(Long fundingId);
}