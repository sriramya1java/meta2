<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>META 2 - Login</title>
  <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" />
  <script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
</head>
<body>
<div>
  <div class="container" style="margin-top:5%;">
    <div class="card">
      <div class="card-header">&nbsp;</div>
      <div class="card-body text-center">
        <p>
          <b>**WARNING**WARNING**WARNING**WARNING**WARNING</b><br> This is a Census Bureau computer system. Census Bureau computer systems are provided for the processing of official U.S. Government information only. All data contained within Census Bureau
          computer systems are owned by the Census Bureau and may be monitored intercepted recorded read copies or captured in any manner and disclosed in any manner by authorized personnel. THERE IS NO RIGHT OF PRIVACY IN THIS SYSTEM. System personnel
          may disclose any potential evidence of crime found on Census Bureau computer systems to appropriate authorities. USE OF THIS SYSTEM BY ANY USER AUTHORIZED OR UNAUTHORIZED CONSTITUTIES CONSENT TO THIS MONITORING INTERCEPTION RECORDING READING COPYING
          CAPTURING and DISCLOSURE OF COMPUTER ACTIVITY. Use of this computer without authorization or for unauthorized purposes is a violation of federal law and punishable by fines or imprisonment (Public Law 99-474) <br>
          <b>**WARNING**WARNING**WARNING**WARNING**WARNING</b><br><br> **************************
          <br> DISCLOSURE PROHIBITED -- TITLE 13 U.S.C. THIS SITE CONTAINED INFORMATION, THE RELEASE OF WHICH IS PROHIBITED BY TITLE 13 U.S.C AND IS FOR BUREAU OF CENSUS OFFICIAL USE ONLY.<br> **************************
        </p>
      </div>
    </div>
    <form action="j_security_check" method="post" accept-charset="utf-8">
      <div class="clearfix">&nbsp;</div>
      <div class="card">
        <div class="card-header"><b>Login</b></div>
        <div class="card-body text-center">
          <div class="form-group row">
            <label class="col-sm-4 col-form-label text-right" for="Username">Username</label>
            <div class="col-sm-4">
              <input name="j_username" class="form-control width30" type="text">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-form-label text-right" for="Password">Password</label>
            <div class="col-sm-4">
              <input name="j_password" class="form-control width30" type="password">
            </div>
            <span class="col-sm-2"><button class="btn btn-secondary" type="submit"><b>Login</b></button></span>
          </div>
        </div>
      </div>
  </form>
</div>
</div>
</body>
</html>
