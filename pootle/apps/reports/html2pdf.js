/*
 * Copyright (C) Zing contributors.
 *
 * This file is a part of the Zing project. It is distributed under the GPL3
 * or later license. See the LICENSE file for a copy of the license and the
 * AUTHORS file for copyright and authorship information.
 */

var system = require('system')
var page = require('webpage').create();
var fs = require('fs');

var infile = system.args[1];
var outfile = system.args[2];

page.viewportSize = { width: 600, height: 600 };
page.paperSize = { format: 'Letter', orientation: 'portrait', margin: '1cm' };
page.zoomFactor = 1.3;

page.open(infile, function (status) {
  if (status !== 'success') {
    console.log('Failed to load the file');
    phantom.exit(1);
  }

  page.render(outfile);
  phantom.exit();
});
