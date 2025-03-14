package com.sai.tasksubmissionservice.model;

public enum TaskStatus {
    PENDING("PENDING"),
    ASSIGNED("ASSIGNED"),
        DONE("DONE");

    TaskStatus(String pending) {
    }
}
