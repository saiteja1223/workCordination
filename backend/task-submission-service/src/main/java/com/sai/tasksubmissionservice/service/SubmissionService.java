package com.sai.tasksubmissionservice.service;

import com.sai.tasksubmissionservice.model.Submission;
import org.hibernate.sql.ast.tree.expression.Summarization;

import java.util.List;

public interface SubmissionService {
    Submission submitTask(Long taskId,String githubLink,Long userId,String jwt)throws Exception;
    Submission getTaskSubmissionById(Long submissionId)throws Exception;
    List<Submission>getAllTaskSubmissions();
    List<Submission>getTaskSubmissionsByTaskId(Long taskId);
    Submission acceptDeclineSubmission(Long id, String status)throws Exception;
}
