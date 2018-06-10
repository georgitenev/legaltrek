<?php

class Billing
{
	private static $file_storage_path = './storage/billings_data.json';

	/**
	* Return all billings
	*/
	public function getAllBillings()
	{
		return self::getDataDecoded();
	}

	/**
	* Add new billing
	* @param array $params
	*/
	public function saveBilling($params)
	{
		if(!file_exists(self::$file_storage_path))
		{
			$params['id'] = 0;
			$data = array($params);
		}
		else
		{
			$data = self::getDataDecoded();
			$last = end($data);
			$params['id'] = $last['id']+1;
			array_push($data, $params);
		}

		return self::saveFile($data);
	}

	/**
	* Edit billing
	* @param int $id
	* @param array $params
	*/
	public function editBilling($id, $params)
	{
		if(!file_exists(self::$file_storage_path))
		{
			return false;
		}

		$data = self::getDataDecoded();
		foreach ($data as $key => $value)
		{
			if($value['id'] == $id)
			{
				foreach ($params as $prop => $val) {
					$data[$key][$prop] = $val;
				}
				break;
			}
		}

		return self::saveFile($data);
	}

	/**
	* Delete billing
	* @param int $id
	*/
	public function deleteBilling($id)
	{
		if(!file_exists(self::$file_storage_path))
		{
			return false;
		}

		$data = self::getDataDecoded();
		foreach ($data as $key => $value)
		{
			if($value['id'] == $id)
			{
				unset($data[$key]);
			} 
		}

		return self::saveFile($data);
	}

	/**
	* Remove all billings
	*/
	public function removeAllBilings()
	{
		return self::saveFile(array());
	}

	/**
	* Get billing data in array
	*/
	private function getDataDecoded()
	{
		return array_values(json_decode(self::getData(), true));
	}

	/**
	* Get billing data encoded
	*/
	private function getData()
	{
		if(file_exists(self::$file_storage_path))
		{
			return file_get_contents(self::$file_storage_path);
		}
		return '[]';
	}

	/**
	* Save data in file $file_storage_path
	*/
	private function saveFile($data)
	{
		$result = file_put_contents(self::$file_storage_path, json_encode($data));
		return $result? true : false;
	}
}