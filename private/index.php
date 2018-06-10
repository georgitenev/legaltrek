<?php
/**
* Require silex
*/
require_once __DIR__.'/vendor/autoload.php';

/**
* Require classes
*/
require_once 'repositories/Billing.php';
require_once 'repositories/Currency.php';

/**
* Require microframework's components
*/
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
* new instance of Silex\Application
*/
$app = new Silex\Application();
// $app['debug'] = true;

/**
* Define routes
* get/save/edit/delete/deleteAll billings
* get currency
*/

$app->get('/billing', function (Silex\Application $app){
	return $app->json(Billing::getAllBillings(), Response::HTTP_OK)->setEncodingOptions(JSON_NUMERIC_CHECK);
});
$app->post('/billing', function (Silex\Application $app, Request $request){
	return $app->json(Billing::saveBilling(json_decode($request->getContent(), true)), Response::HTTP_OK)->setEncodingOptions(JSON_NUMERIC_CHECK);
});
$app->put('/billing/{id}', function (Silex\Application $app, Request $request, $id){
	return $app->json(Billing::editBilling($id, json_decode($request->getContent(), true)), Response::HTTP_OK)->setEncodingOptions(JSON_NUMERIC_CHECK);
});
$app->delete('/billing/{id}', function (Silex\Application $app, Request $request, $id){
	return $app->json(Billing::deleteBilling($id), Response::HTTP_OK)->setEncodingOptions(JSON_NUMERIC_CHECK);
});
$app->delete('/removeAllBilings', function (Silex\Application $app){
	//delete all billing with single request- not used
	return $app->json(Billing::removeAllBilings(), Response::HTTP_OK)->setEncodingOptions(JSON_NUMERIC_CHECK);
});
$app->get('/currency/', function (Silex\Application $app){
	return $app->json(Currency::getAllCurrencies(), Response::HTTP_OK)->setEncodingOptions(JSON_NUMERIC_CHECK);
});

// run application
$app->run();