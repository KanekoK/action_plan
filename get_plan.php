<?php
$data = "https://spreadsheets.google.com/feeds/list/19vgj5I4o22libj1rDMo-qsDH3cEV8n6j6Ur5WvLJRso/od6/public/values?alt=json";
$json = file_get_contents($data);
$json_decode = json_decode($json);

