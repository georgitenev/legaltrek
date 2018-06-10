<?php

class Currency
{
	private static $file_storage_path = './storage/currencies_data.json';

	/**
	* Get all currencies data from $file_storage_path
	* returns array
	*/
	public function getAllCurrencies()
	{

		if(file_exists(self::$file_storage_path))
		{
			$currencies = file_get_contents(self::$file_storage_path);
			return array_values(json_decode($currencies, true));
		}

		return array();
	}

}