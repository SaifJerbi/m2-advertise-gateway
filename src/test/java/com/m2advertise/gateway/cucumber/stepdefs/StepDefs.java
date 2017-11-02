package com.m2advertise.gateway.cucumber.stepdefs;

import com.m2advertise.gateway.M2AdvertiseGatewayApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = M2AdvertiseGatewayApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
