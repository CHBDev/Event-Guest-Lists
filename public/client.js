client = angular.module('theClient',[
                            'theClient.controllers',
                            'theClient.services'
                            ])


.config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  //TODO
  $sceProvider.enabled(false);
});

