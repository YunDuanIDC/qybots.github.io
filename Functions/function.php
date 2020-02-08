<?php

function getBingImg(){
    $data = file_get_contents("https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1");
    $data = json_decode($data);

    if(is_object($data)){
        return "https://cn.bing.com/".$data->images[0]->url;
    }
    return "";
}
?>