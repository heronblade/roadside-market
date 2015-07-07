if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function() {
    describe('Sign Up', function() {
      describe('Create an account', function() {
        it('successfully creates an account', function() {
          var email = new Date().getTime().toString() + '-user@example.com';

          $('a[href="/sign-up"]').click();
          $('#login-sign-in-link').click();
          $('#signup-link').click();
          $('#login-email').val(email);
          $('#login-password').val('Password1');
          $('#login-buttons-password').click();

          chai.assert.equal($('a[href="/sign-out"]').length, 1);
        });
      });
    });
  });
}
