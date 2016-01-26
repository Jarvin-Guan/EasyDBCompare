var app = angular.module('myApp', []);
app.controller('dbCompareCtl', function($scope) {
    $scope.portleft=3306;
    $scope.portRight=3306;
    $scope.haveResult=false;
    //左边
    $scope.tableleft=["jianzheng",'hjf_jianzheng','guanjianwen'];
    $scope.testleft=function(){
        var btn = $("#btn_login");
        btn.button('loading');
        try
        {
            TestDB($scope.addressleft,
                $scope.portleft,
                $scope.userleft,
                $scope.passwordleft,function(msg){
                    btn.button('reset');
                    if(msg==-1)
                    {
                        $scope.Testresult="连接失败";
                        $('#testResultModal').modal('show');
                    }
                    else
                    {
                        $scope.Testresult="连接成功";
                        $('#testResultModal').modal('show');
                    }
                });
        }
        catch (e)
        {
            alert("测试失败,原因:"+ e.message);
        }

    };
    $scope.testRight=function(){
        try
        {
            TestDB($scope.addressRight,
                $scope.portRight,
                $scope.userRight,
                $scope.passwordRight);
        }
        catch (e)
        {
            alert("测试失败,原因:"+ e.message);
        }

    };

    $scope.beginConpare=function(){
        $scope.haveResult=true;
        //计算结果.

        //开放模块
    };

});


function TestDB(address,root,user,password,callback)
{
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : address,
        port     : root,
        user     : user,
        password : password
    });

    connection.connect(function(err) {
        if (err) {
            callback(-1);
        }
        else
        {
            callback(connection.threadId);
        }
    });

}

