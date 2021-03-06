Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Privacy Policy");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Terms of Service");
  }

  data.buffer.push(escapeExpression((helper = helpers['top-nav'] || (depth0 && depth0['top-nav']),options={hash:{
    'tagName': ("nav")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "top-nav", options))));
  data.buffer.push("\n<div class=\"container\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<footer>\n  <ul class=\"footerNav\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "privacy", options) : helperMissing.call(depth0, "link-to", "privacy", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "terms", options) : helperMissing.call(depth0, "link-to", "terms", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <p>© Amicus 2015</p>\n  </ul>\n</footer>");
  return buffer;
  
});

Ember.TEMPLATES["careers"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"background careers\">\n  <h1>We're Hiring!</h1>\n</div>\n<div class=\"careers\">\n  <section>\n    <h2>Why Amicus?</h2>\n    <p>Amicus is reshaping civil society. We believe profits and social good can go hand in hand. At Amicus, you can work for a fast growing startup that's disrupting a really large market and feel great about what you do. Nonprofits in the U.S. currently spend $60 billion annually to raise $300 billion — 20 cents on the dollar! We build tools that increase the amount nonprofits raise, while drastically decreasing their costs. Amicus puts more money in the hands of great organizations and creates lots of value in the process. Tired of deciding whether to do good or do well? You've come to the right place.</p>\n    <p>Oh, and we're based in New York City*, the Rome of our time.</p>\n    <p class=\"note\">*Not based in NYC? Amicus can fix that.</p>\n  </section>\n\n  <section class=\"investors\">\n    <h2>Our Investors</h2>\n    <p>Amicus is backed by an amazing group of investors:</p>\n    <ul>\n      <li><a href=\"http://www.ycombinator.com/\"><img id=\"yc\" src=\"img/investors/yc.png\" alt=\"Y Combinator\"></a></li>\n      <li><a href=\"http://www.foundersfund.com/\"><img id=\"foundersFund\" src=\"img/investors/foundersFund.png\" alt=\"Founders Fund\"></a></li>\n      <li><a href=\"https://www.omidyar.com/\"><img id=\"omidyar\" src=\"img/investors/omidyar.png\" alt=\"Omidyar Network\"></a></li>\n      <li><a href=\"http://www.rre.com/\"><img id=\"rre\" src=\"img/investors/rre.png\" alt=\"RRE Ventures\"></a></li>\n      <li><a href=\"http://www.iaventures.com/\"><img id=\"ia\" src=\"img/investors/ia.png\" alt=\"IA Ventures\"></a></li>\n      <li><a href=\"http://quotidian.co\"><img id=\"qv\" src=\"img/investors/qv.png\" alt=\"Quotidian Ventures\"></a></li>\n      <li><a href=\"http://500.co/\"><img id=\"fivehundred\" src=\"img/investors/500.png\" alt=\"500 Startups\"></a></li>\n      <li><a href=\"http://www.nycseed.com/\"><img id=\"nycSeed\" src=\"img/investors/nycSeed.gif\" alt=\"NYC Seed\"></a></li>\n      <li><a href=\"http://www.hpvp.com/\"><img id=\"highPeaks\" src=\"img/investors/highPeaks.png\" alt=\"High Peaks Venture Partners\"></a></li>\n      <li>Alexis Ohanian</li>\n      <li>Esther Dyson</li>\n      <li>Garry Tan</li>\n    </ul>\n  </section>\n\n  <section class=\"openings\">\n    <h1>Amicus is hiring</h1>\n    <div>\n      <h2>Senior Developer</h2>\n      <p><b>About You</b></p>\n      <ul>\n        <li>You’re a product-centric developer</li>\n        <li>You feel a sense of responsibility over the products you build</li>\n        <li>You take initiative and are comfortable working in uncertainty</li>\n      </ul>\n      <p><b>Required Skills</b></p>\n      <ul>\n        <li>Expertise in Rails, Javascript, MongoDB</li>\n        <li>Strong knowledge of AWS ecosystem</li>\n        <li>Proven ability to jump into a new project without much guidance</li>\n      </ul>\n      <p><b>Required Experience</b></p>\n      <ul>\n        <li>Experience running multi threaded Rails applications</li>\n        <li>Experience developing and deploying SOA apps</li>\n      </ul>\n    </div>\n  </section>\n\n  <section class=\"apply\">\n    <h2>Apply</h2>\n    <div>\n      <p>\n        <b>Your info. <span>(All fields required)</span></b>\n      </p>\n      <form action=\"\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Name (First and last)")
  },hashTypes:{'type': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Current job")
  },hashTypes:{'type': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Email")
  },hashTypes:{'type': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Phone number")
  },hashTypes:{'type': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'placeholder': ("Github or LinkedIn")
  },hashTypes:{'type': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </form>\n      <label for=\"description\">Why are you the right candidate?<textarea name=\"\" id=\"description\" cols=\"30\" rows=\"10\" placeholder=\"Tell us about you\"></textarea></label>\n      <button class=\"submit\">Submit</button>\n    </div>\n  </section>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/address-component"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("  <p>\n    Amicus FTW, Inc. <br>\n    16 West 22nd Street, 6th Floor <br>\n    New York, NY 10010 <br>\n    <a href=\"#\">help@amicushq.com</a>\n  </p>");
  
});

Ember.TEMPLATES["components/demo-form-component"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"fields\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("first-name"),
    'class': ("first-name"),
    'placeholder': ("First Name")
  },hashTypes:{'type': "STRING",'name': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'name': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("last-name"),
    'class': ("last-name"),
    'placeholder': ("Last Name")
  },hashTypes:{'type': "STRING",'name': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'name': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("organization"),
    'class': ("organization"),
    'placeholder': ("Organization")
  },hashTypes:{'type': "STRING",'name': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'name': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("phone"),
    'class': ("phone"),
    'placeholder': ("Phone Number")
  },hashTypes:{'type': "STRING",'name': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'name': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("email"),
    'class': ("email"),
    'placeholder': ("Email")
  },hashTypes:{'type': "STRING",'name': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'name': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n</div>\n<div class=\"submit\">\n  <input class=\"submit-button\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'value': ("call-to-action")
  },hashTypes:{'value': "STRING"},hashContexts:{'value': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/social-proof-component"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Leading organizations rely on Amicus.</h1>\n<ul>\n  <li class=\"source\">\n    <div class=\"logo\">\n      <img alt=\"Afl_logo\" src=\"img/proof/afl.png\">\n    </div>\n    <div class=\"person\">\n      <p class=\"name\">Nicole Aro</p>\n      <p class=\"title\">Director, Digital Strategies</p>\n    </div>\n    <p class=\"quote\">\"Amicus' friend-to-friend connections enhance our traditional outreach program and make it easier to mobilize our supporters online.\"</p>\n  </li>\n  <li class=\"source\">\n    <div class=\"logo\">\n      <img alt=\"Hrc_logo\" src=\"img/proof/hrc.png\">\n    </div>\n    <div class=\"person\">\n      <p class=\"name\">Lindsey Twombly</p>\n      <p class=\"title\">Social Media and Online Mobilization</p>\n    </div>\n    <p class=\"quote\">\"We all know the most powerful ask is a friend asking a friend to support a cause they believe in. Amicus makes this possible at scale.\"</p>\n  </li>\n  <li class=\"source\">\n    <div class=\"logo\">\n      <img alt=\"Nea_logo\" src=\"img/proof/nea.png\">\n    </div>\n    <div class=\"person\">\n      <p class=\"name\">Kristofer Garcia</p>\n      <p class=\"title\">Senior Campaign Specialist</p>\n    </div>\n    <p class=\"quote\">\"Amicus' game elements helped us boost volunteer productivity by making outreach fun and easy.\"</p>\n  </li>\n</ul>");
  
});

Ember.TEMPLATES["components/top-nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    <img id=\"lMark\" src=\"img/badger-small.png\" alt=\"\">\n    <img id=\"lType\" src=\"img/logo-blue.png\" alt=\"Amicus\">\n  ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Features");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Careers");
  }

  data.buffer.push("<div class=\"logo\">\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<ul class=\"top-nav\">\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "features", options) : helperMissing.call(depth0, "link-to", "features", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "careers", options) : helperMissing.call(depth0, "link-to", "careers", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["features"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"features\">\n\n  <section class=\"container\">\n    <ul>\n      <li class=\"click\">\n        <div class=\"icons\">\n          \n          \n          <p>1 x</p>\n          <img id=\"pointer\" src=\"img/features/icons_pointer.svg\" alt=\"\">\n        </div>\n        <div class=\"copy\">\n          <h1>One-click calls for intuitive, simple use.</h1>\n          <p>Empower your volunteers to do more, by doing less.</p>\n        </div>\n        \n        <span class=\"next\">&#x25BD;</span>\n      </li>\n      <li>\n        <h2>VoIP supported.</h2>\n        <p>No phone? No problem. Volunteers can make calls securely online.</p>\n        \n        <span class=\"next\">&#x25BD;</span></li>\n      <li>\n        <h2>Dynamic call scripts.</h2>\n        <p>Prepare your volunteers for any interaction.</p>\n        \n      <span class=\"next\">&#x25BD;</span>\n    </li>\n      <li>\n        <h2>Distributed call centers.</h2>\n        <p>Gone are the days where there weren't enough call stations.</p>\n        <span class=\"next\">&#x25BD;</span>\n      </li>\n      <li>\n        <h2>Complete, easy campaign analytics.</h2>\n        <p>Know how your team is doing, in real time.</p>\n        <span class=\"next\">&#x25BD;</span>\n      </li>\n      <li>\n        <h2>Fully branded for your organization.</h2>\n        <p>Reinforce your message.</p>\n        <span class=\"next\">&#x25BD;</span>\n      </li>\n      <li>\n        <h2>Gamified, to recognize top volunteers</h2>\n        <p>Leaderboards and friendly competition built in.</p>\n        <span class=\"next\">&#x25BD;</span>\n      </li>\n    </ul>\n  </section>\n  <section id=\"demo\" class=\"features footer-demo\">\n    <div>\n      <p>\n        <b>Request a free demo</b>\n      </p>\n      ");
  data.buffer.push(escapeExpression((helper = helpers['demo-form-component'] || (depth0 && depth0['demo-form-component']),options={hash:{
    'tagName': ("form"),
    'classNames': ("footer demo-form"),
    'call-to-action': ("Submit")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING",'call-to-action': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0,'call-to-action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "demo-form-component", options))));
  data.buffer.push("\n    </div>\n  </section>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<img src=\"img/icons/icons_click.svg\" alt=\"\">One-click calls");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<img src=\"img/icons/icons_distributed.svg\" alt=\"\">Distributed call centers");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<img src=\"img/icons/icons_brand.svg\" alt=\"\">Fully branded");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("<img src=\"img/icons/icons_gamified.svg\" alt=\"\">Built-in Leaderboards");
  }

  data.buffer.push("<div class=\"banner\">\n  <img src=\"img/features/callPage.png\" alt=\"\">\n  <section>\n    <div class=\"content\">\n      <h1>The World's Best Peer to Peer Call Tool.</h1>\n      <h2>Powering People Power</h2>\n    </div>\n  </section>\n  ");
  data.buffer.push(escapeExpression((helper = helpers['demo-form-component'] || (depth0 && depth0['demo-form-component']),options={hash:{
    'tagName': ("form"),
    'classNames': ("demo-form"),
    'call-to-action': ("Request a free demo")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING",'call-to-action': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0,'call-to-action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "demo-form-component", options))));
  data.buffer.push("\n</div>\n\n<div class=\"content\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers['social-proof-component'] || (depth0 && depth0['social-proof-component']),options={hash:{
    'tagName': ("section"),
    'classNames': ("social-proof")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "social-proof-component", options))));
  data.buffer.push("\n</div>\n\n  <section class=\"features\">\n    <h1>Main Features</h1>\n    <ul>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "features", options) : helperMissing.call(depth0, "link-to", "features", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "features", options) : helperMissing.call(depth0, "link-to", "features", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "features", options) : helperMissing.call(depth0, "link-to", "features", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "features", options) : helperMissing.call(depth0, "link-to", "features", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    </ul>\n  </section>\n\n<div class=\"content\">\n  \n  <section class=\"press\">\n    <h1>In the news</h1>\n    <ul>\n      <li class=\"bloomberg\"><a href=\"http://www.bloomberg.com/video/democratizing-democracy-shaping-the-election-p20TadhfR5KF18huJT15fQ.html\"><img src=\"img/press/Bloomberg.png\" alt=\"Bloomberg TV\"></a></li>\n      <li class=\"cnn\"><a href=\"http://money.cnn.com/2012/08/28/technology/startups/facebook-house/index.html\"><img src=\"img/press/CNN.png\" alt=\"CNN\"></a></li>\n      <li class=\"atlantic\"><a href=\"http://www.theatlantic.com/politics/archive/2012/11/my-best-friend-is-gay-where-social-networks-meets-same-sex-marriage/265793/#\"><img src=\"img/press/Atlantic.png\" alt=\"The Atlantic\"></a></li>\n      <li class=\"economist\"><a href=\"http://www.economist.com/news/business/21567403-techniques-presidents-election-campaigns-have-spawned-one-lot-young-firms-obama\"><img src=\"img/press/Economist.png\" alt=\"The Economist\"></a></li>\n      <li class=\"tc\"><a href=\"http://techcrunch.com/2012/11/13/amicus/\"><img src=\"img/press/TechCrunch.png\" alt=\"TechCrunch\"></a></li>\n      <li class=\"abc\"><a href=\"http://abclocal.go.com/kgo/story?section=news/technology&amp;id=8790249\"><img src=\"img/press/ABC.png\" alt=\"abc NEWS\"></a></li>\n      <li class=\"buzzfeed\"><a href=\"http://www.buzzfeed.com/rebeccaelliott/7-under-the-hood-technologies-that-are-transformin\"><img src=\"img/press/BuzzFeed.png\" alt=\"Buzzfeed\"></a></li>\n    </ul>\n</section>\n<section class=\"footer-demo\">\n  <div>\n    <p>\n      <b>Request a free demo</b>\n    </p>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['demo-form-component'] || (depth0 && depth0['demo-form-component']),options={hash:{
    'tagName': ("form"),
    'classNames': ("footer demo-form"),
    'call-to-action': ("Submit")
  },hashTypes:{'tagName': "STRING",'classNames': "STRING",'call-to-action': "STRING"},hashContexts:{'tagName': depth0,'classNames': depth0,'call-to-action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "demo-form-component", options))));
  data.buffer.push("\n  </div>\n</section>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["privacy"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"text-page\">\n  <h1>Amicus FTW, Inc. Privacy Policy Effective Date: July 26, 2013</h1>\n  <p>Welcome to the Amicus App (the \"App\"), operated by Amicus FTW, Inc. (\"Amicus,\" \"we,\" \"our,\" or \"us\"). We are making the world a better place by allowing you to bring your friends into your work for the common good. When you share your information with us it makes our App work better for you--by making your outreach experience more social and allowing us to improve the services we offer. As you use the App, we want you to be clear how your information is being used.</p>\n  <p>Our Privacy Policy covers several important areas, including:</p>\n  <ul>\n    <li>What kind of information we collect from our users</li>\n    <li>How we use information submitted by our users</li>\n    <li>Security in place to protect your information</li>\n  </ul>\n  <p>This privacy policy applies to the amicushq.com website (the \"Site\"), our App, any API integrations we offer, and any other web pages operated by Amicus that link to this Privacy Policy. Do not use this site or provide us with information if you do not agree with all the terms. By visiting our Site and/or using our App, you consent to all terms enclosed in our Privacy Policy. We reserve the right to update our Privacy Policy at any time.</p>\n  <h2>Information We Collect</h2>\n  <p>We collect information from our users to help us understand how our App is being used. This information includes personally identifying information (\"Personal Information\") as well as non-identifiable information collected through App activity.</p>\n  <h2>Personal Information We Collect</h2>\n  <p>We collect information from users when they create an account with our App. When you sign up for an account we ask for Personal Information, such as first and last name, email address, zip code, and age. You may edit your Personal Information through the \"Account Settings\" icon at the top right-hand side of the App.</p>\n  <p>If you take full advantage of the App and link your Facebook account, we access your public profile, friend list, email address, birthday, education history, groups, hometown, current city, photos and your friends' birthdays, work histories, education histories, groups, hometowns and current cities. For more information refer to Facebook's Permission's Reference and Facebook's Privacy Policy. Please be advised that the information you share with Facebook will be governed by Facebook's privacy policy, and not Amicus' Privacy Policy.</p>\n  <p>We also collect volunteered Personal Information (such as an email address) if you contact us or sign up for information about our services through our Site. We retain the full content of emails from individuals who voluntarily contact us.</p>\n  <h2>Non-Identifiable Information We Collect</h2>\n  <p>When you use the App or our Site, we receive and store certain personally non-identifiable information, such as server log data and information obtained through cookies.</p>\n  <p>When you use the App or our Site, we may collect a range of information that appears in server logs. This may include but is not limited to:</p>\n  <ul>\n    <li>Information about how you use our service such as duration of visits to the App or Site.</li>\n    <li>Telephone information such as call duration and time and date of calls. We only pull call information when used within the App.</li>\n  </ul>\n  <p>This log data is anonymous and cannot presently be used to specifically identify you, but is helpful in our efforts to improve quality and services of the App.</p>\n  <p>When you log in to the App or use the Site, we may send a small text file known as a \"cookie\" to your computer. This cookie uniquely identifies your computer to us and gives us information about when you log in and how long you use the App. The cookies collect no Personal information about you and cannot presently be used to specifically identify you. You are free to decline cookies through a setting in your browser if your browser allows, however this will significantly reduce the quality of the user experience.</p>\n  <h2>How We Use Your Information</h2>\n  <p>We use the information we collect to operate and improve the quality of the features available through Amicus. The information we collect may be used to:</p>\n  <ul>\n    <li>Provide the Amicus team with internal information meant to improve user experience and inform our efforts of data-driven analysis. We use log information to improve user experience and the overall quality of the App, our Site and the services that we offer to users.</li>\n    <li>Create a targeted outreach tool for you. Your Personal Information allows us to customize features of the App particular to your location and social connections.</li>\n    <li>Present our client organizations with an accurate representation of the total volunteer use of the App for their campaigns.</li>\n  </ul>\n  <p>We combine personal information collected through Facebook with information gathered from Catalist for the \"Match Friends\" feature in the App.</p>\n  <h2>Sharing Your Information</h2>\n  <p>We do not share Personal Information with organizations or individuals outside of Amicus except in the following circumstances:</p>\n  <h2>With Partnering Organizations</h2>\n  <p>When you provide information to use through the App and/or the Site, your information may be shared with the partnering organization for which the branded App was created. Where you log into a partnering organization's website, we may share your Personal Information and log information with that partnering organization. Log information is shared with our partnering organization as individuals use the App. It is possible our partnering organization will contact you in the future for matters unrelated to their campaign powered by Amicus. By logging in to an account on an Amicus-powered partnering organization, you consent to your Personal Information and certain non-identifying information being shared with that partnering organization.</p>\n  <h2>With Third Party Providers</h2>\n  <p>We may share your information with third-party organizations that provide services that power features of the App. We use Stripe, Inc. to process credit card contributions made through the App. Your credit card information is passed directly from the supporter to Stripe so Amicus never collects credit card information. Thus, if you contribute to a campaign through the App, the organization may obtain your Personal Information but will not have access to your credit card number. We share all personal user information with Catalist.</p>\n  <h2>Business Transfers</h2>\n  <p>In the event that Amicus in bankruptcy, merger, acquisition, reorganization or sale of assets, your information may be sold or transferred in the transaction.</p>\n  <h2>Compliance with Legal Process</h2>\n  <p>We may disclose personal information if we believe that such action is necessary to (a) conform to the law, comply with legal process served on us or our affiliates, or investigate, prevent, or take action regarding suspected or actual illegal activities; (b) to enforce our Terms of Service, take precautions against liability, to investigate and defend ourselves against any third-party claims or allegations, to assist government enforcement agencies, or to protect the security or integrity of our site; and (c) to exercise or protect the rights, property, or personal safety of Amicus, our Users or others.</p>\n  <p>Amicus is not responsible for the content of links that partnering organizations place on the App and/or our Site to third-party websites, nor are we responsible for third-party links to the App and/or our Site. If you wish to contest the third party's use of your personal information, contact the organization directly. Amicus will not be held liable for the acts or omissions of a third party. Please consult the third party's privacy policy to determine that third party's information collection and handling policies.</p>\n  <h2>Security</h2>\n  <p>We take reasonable steps to protect your Personal Information and to collect, store, and use your Personal Information in compliance with our Privacy Policy. Please be advised, however, that Internet transmissions of Personal Information cannot be 100 percent secure. Accordingly, you should use caution in determining what Personal Information you elect to disclose to us via the Internet.</p>\n  <h2>Accessing or Modifying Your Information</h2>\n  <p>You may edit your Personal information through the \"Settings\" icon at the top right-hand side of the App. We will take reasonable steps to update our records after you edit your Personal Information. The user may access First and Last Name, Email, Phone number, and Password through the \"Settings\" Icon. Users must contact Amicus directly for access to all other forms of personal information.</p>\n  <h2>Children's Privacy</h2>\n  <p>We do not knowingly collect information from children under the age of 13 in accordance with the Children's Online Privacy Protection Act of 1998. If you are a parent or guardian of a child under 13 who you believe has submitted Personal Information to us, please email us at <a href=\"help@amicushq.com\">help@amicushq.com</a>.</p>\n  <h2>Changes to Our Privacy Policy</h2>\n  <p>We reserve the right to update this Privacy Policy at any time. Where required by applicable law, we will provide notice to you of material changes or obtain consent to certain changes. Notice of material changes shall be posted on the website.</p>\n  <h2>Contact Information</h2>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "address-component", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <h1>Safe Harbor Privacy Policy</h1>\n  <p>Amicus complies with the U.S.-EU Safe Harbor Framework and the U.S.-Swiss Safe Harbor Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information from European Union member countries and Switzerland. Amicus has certified that it adheres to the Safe Harbor Privacy Principles of notice, choice, onward transfer, security, data integrity, access, and enforcement. To learn more about the Safe Harbor program, and to view Amicus’ certification, please visit  <a href=\"http://www.export.gov/safeharbor/\">http://www.export.gov/safeharbor/</a>.</p>\n  <p>This self-certification covers our processing of personal data from Austria, Belgium, Bulgaria, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, Switzerland and the United Kingdom. Additional general information regarding Amicus’ services and how personal data entered into the site is handled can be found at <a href=\"http://amicushq.com/legal/privacy_policy\">http://amicushq.com/legal/privacy_policy</a>. This policy covers data processed by Amicus on behalf of third parties and data entered into amicushq.com by consumers in the EU and Switzerland.</p>\n  <p>Amicus does not own data entered into the service by our partners, and processes such data only in accordance with the instructions of its partners, including political parties and campaigns, nonprofit organizations, individuals and business entities. In accordance with the Safe Harbor Principles, Amicus works with its partners to ensure privacy protection and clear notices to individuals about their personal data and their rights under the Safe Harbor framework.</p>\n  <h2>Safe Harbor Principles</h2>\n  <p><b>Notice:</b> Amicus processes personal information entered into amicushq.com and other domains to provide the service described at <a href=\"http://amicushq.com/legal/privacy_policy\">http://amicushq.com/legal/privacy_policy</a>. Amicus processes personal data on behalf of EU and Swiss consumers only at the direction of its partners, who are responsible for their constituents’ records. Amicus’ EU and Swiss partners are responsible for providing their members and supporters the choice to opt-out of their websites and databases. To provides its services, Amicus works with SendGrid, Inc., a bulk email provider which complies with the Safe Harbor Principles (<a href=\"http://safeharbor.export.gov/companyinfo.aspx?id=12736\">http://safeharbor.export.gov/companyinfo.aspx?id=12736</a>). Amicus processes personal data using industry standard encryption, including OpenSSL encryption. However, no data protection protocol is 100% secure, and Amicus does not warrant that information may not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or managerial safeguards.</p>\n  <p><b>Choice:</b> Third parties that use Amicus to collect personal information shall provide their users the ability to opt-out of collection of any personal data (such as not signing into the site database, or requesting that any personal data about them be removed from the service). Additionally, any member of a European Union country or Switzerland attempting to opt-out of data collections using the Amicus service can contact privacy@amicushq.com to have their information removed from the service. Amicus’ partners may have legitimate use of sensitive personal information (see Safe Harbor Framework FAQ 1 (4) and (6) -<a href=\"http://export.gov/safeharbor/eu/eg_main_018375.asp\">http://export.gov/safeharbor/eu/eg_main_018375.asp</a>), including race, religion or sexual orientation. Amicus does not collect such information about the users of amicushq.com and its EU and Swiss partners should store such information only with the express opt-in permission of their constituents.</p>\n  <p><b>Onward Transfer:</b> Amicus shares customer data with SendGrid for the express purpose of facilitating email communication by organizations and individuals, and with NationBuilder for the express purpose of allowing our partners volunteer management. SendGrid and NationBuilder comply with the Safe Harbor Principles.</p>\n  <p><b>Security:</b> Amicus utilizes industry standard security for maintaining personal information on behalf of its partners. Amicus employees have access to personal information submitted to amicushq.com and are trained on the company’s privacy policies and the Safe Harbor Principles.</p>\n  <p><b>Data Integrity and Access:</b> Consumers who enter personal information at amicushq.com or any Amicus site administered by a third party may at any time update or correct account information and email preferences at any time by logging in to your account settings and changing your contact preferences. Consumers in the European Union or Switzerland may review and correct the information about them kept by Amicus for its own services by contacting us directly at <a href=\"privacy@amicushq.com\">privacy@amicushq.com</a>. Amicus’ responsibilities in this area under the Safe Harbor Principles are described at <a href=\"http://export.gov/safeharbor/eu/eg_main_018380.asp\">http://export.gov/safeharbor/eu/eg_main_018380.asp</a></p>\n  <p><b>Enforcement:</b> In compliance with the US-EU and US-Swiss Safe Harbor Principles, Amicus commits to resolve complaints about your privacy and our collection or use of your personal information. European Union or Swiss citizens with inquiries or complaints regarding this privacy policy should first contact Amicus at <a href=\"privacy@amicushq.com\">privacy@amicushq.com</a>.</p>\n  <p>Amicus has further committed to refer unresolved privacy complaints under the US-EU and US-Swiss Safe Harbor Principles to an independent dispute resolution mechanism, the BBB EU SAFE HARBOR, operated by the Council of Better Business Bureaus. If you do not receive timely acknowledgment of your complaint, or if your complaint is not satisfactorily addressed by Amicus, please visit the BBB EU SAFE HARBOR web site at <a href=\"www.bbb.org/us/safe-harbor-complaints\">www.bbb.org/us/safe-harbor-complaints</a> for more information and to file a complaint.</p>\n  <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this website, please contact us at <a href=\"privacy@amicushq.com\">privacy@amicushq.com</a>, or send mail to:</p>\n  <p>Amicus <br>\n  Attn: Seth Bannon </p>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "address-component", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <p>USA</p>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["terms"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"text-page\">\n  <h1>Amicus FTW, Inc. Terms of Service Effective Date: August 2, 2013</h1>\n  <p>In using Amicus Site and/or the App (each as defined below) you are deemed to have read and agreed to the terms and conditions of this Terms of Service Agreement (the \"Terms\"):</p>\n  <h1>Agreement between user and Amicus FTW, Inc.</h1>\n  <p>Welcome to AmicusHQ. Amicus FTW, Inc. (\"Amicus\", \"We\", or \"Us\") maintains this website (the \"Amicus Site\") as a service to clients who use your app (the \"App\"). \"Client\", \"User\", \"You\", and \"Your\" refers to you, the person accessing the Amicus Site and/or App and accepting these Terms. \"Party\" refers to each of Amicus and the User and \"Parties\" refers to Amicus and the User, collectively. As used in these Terms, \"Service\" refers to the Amicus Site and the App.</p>\n  <p>Amicus offers services to make it easy for our customers to make their volunteers better advocates and fundraisers for causes they believe in with our web-based App. To provide these services, we have created some ground rules for using our Service, as set forth in these Terms.. These Terms explains the terms and conditions by which you may use our Service. Please review our Terms carefully; these Terms constitute a binding agreement between Amicus and our Users concerning our Users use of and access our Service. Your use of our Service constitutes an agreement to be bound by our Terms.</p>\n  <h2>Privacy</h2>\n  <p>We are committed to protecting your privacy. Your use of our Service is subject to Amicus' Privacy Policy. Please review our Privacy Policy before using our Service. As a registered User of our Service you must establish an account password. You are solely responsible for maintaining the confidentiality and security of your password(s) for your Amicus account(s).</p>\n  <h2>Change Terms of Service</h2>\n  <p>We are constantly changing and updating our Service. Accordingly, we reserve the right to revisit and change these Terms at any time without prior notice by updating the link on the Amicus Site. The current displayed Terms will supercede any previous version of the terms. We encourage users to periodically check the Terms for updates. Users who do not agree to updated Terms are no longer permitted to use our Service.</p>\n  <h2>Registration and Account Use</h2>\n  <p>Use of our Service requires Users to create a user account and establish a password to protect that account, and the User agrees to provide accurate and complete information as prompted by the login process and in good faith keep the User account and all registration information up-to-date throughout the period of active use. You understand that you are fully responsible for all actions taken through your Amicus account. User agrees to notify Amicus if you learn that your account and/or password has been compromised and/or if you observe any signs of unauthorized use of your account. You may never use another's user account without permission. Amicus and partnering organizations reserve the right to limit or cancel service, terminate accounts, or change content at any time.</p>\n  <p>Our Service is created and intended for users above the age of 13 in compliance with COPPA. Our Service is not intended for use by any children under the age of 13. Users who are 13 years of age or older may use our Service; provided, however that users who are under the age of 18 must do with the only with the prior consent of a parent or guardian who agrees to our Terms.</p>\n  <h2>Third Party Services</h2>\n  <p>These Terms outline the terms and conditions that apply to Amicus and you with respect to access to and use of the our Service. These Terms do not create any third party beneficiary rights. Amicus relies on third party services to operate. All financial transactions conducted through our Service are processed through a third party association in compliance with their own terms of use and privacy policy. You should contact those third parties directly for any comments and/or questions about their terms of use agreements and privacy policies. Amicus is not responsible for the actions or inactions of the third parties including, but not limited to, service errors and outages, policies, legal terms and data use policies and procedures.</p>\n  <p>Clients may post links to third party sites on the App. Amicus is not responsible for the content of the links nor endorses the contents of the websites linked therein. User assumes all responsibility for User's use of third party sites. Refer to the client's terms of service that govern their relationship to the links they post.</p>\n  <h2>Rules and Conduct</h2>\n  <p>Users must at all times use our Service solely in a responsible and legal manner in full compliance with these Terms and all applicable laws. In particular, but not limited to, Users must not: misrepresent their identity or organization affiliation; send email or postcards to individuals who do not desire to receive such mail; knowingly enter false information about third party individuals through our \"find friends\" feature; interfere with or disrupt service through the App for others; collect or store personal information including email addresses about others without their prior consent.</p>\n  <h1>Intellectual Property Rights</h1>\n  <h2>Services and Service Content:</h2>\n  <p>You acknowledge and agree that the Service may contain content or features (\"Service Content\") that are protected by copyright, patent, trademark, trade secret or other proprietary rights and laws. Except as expressly authorized by Amicus in writing, you agree not to modify, copy, frame, scrape, rent, lease, loan, sell, distribute or create derivative works based on the Service or the Service Content, in whole or in part, except that the foregoing does not apply to your own User Content (as defined below) that you legally upload to the Service. In connection with your use of the Service you will not engage in or use any data mining, robots, scraping or similar data gathering or extraction methods. Any use of the Service or the Service Content other than as specifically authorized herein is strictly prohibited. Any rights not expressly granted herein are reserved by Amicus.</p>\n  <h2>Trademarks:</h2>\n  <p>The Amicus name and logos are trademarks and service marks of Amicus (collectively the \"Amicus Trademarks\"). Other company, product, and service names and logos used and displayed via the Service may be trademarks or service marks of their respective owners who may or may not endorse or be affiliated with or connected to Amicus. Nothing in these Terms or the Service should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any of Amicus Trademarks displayed on the Service, without our prior written permission in each instance. All goodwill generated from the use of Amicus Trademarks will inure to our exclusive benefit.</p>\n  <h2>Third Party Material:</h2>\n  <p>Under no circumstances will Amicus be liable in any way for any content or materials of any third parties (including users), including, but not limited to, for any errors or omissions in any content, or for any loss or damage of any kind incurred as a result of the use of any such content. You acknowledge that Amicus does not pre-screen content, but that Amicus and its designees will have the right (but not the obligation) in their sole discretion to refuse or remove any content that is available via the Service. Without limiting the foregoing, Amicus and its designees will have the right to remove any content that violates these Terms or is deemed by Amicus in its sole discretion, to be otherwise objectionable. You agree that you must evaluate, and bear all risks associated with, the use of any content, including any reliance on the accuracy, completeness, or usefulness of such content.</p>\n  <h2>User Content Transmitted Through the Service:</h2>\n  <p>With respect to the content or other materials you upload through the Service or share with other users or recipients (collectively, \"User Content\"), you represent and warrant that you own all right, title and interest in and to such User Content, including, without limitation, all copyright and rights of publicity contained therein. By uploading any User Content you hereby grant and will grant Amicus and its affiliated companies a nonexclusive, worldwide, royalty free, fully paid up, transferable, sublicensable, perpetual, irrevocable license to copy, display, upload, perform, distribute, store, modify and otherwise use your User Content in connection with the operation of the Service or the promotion, advertising or marketing thereof, in any form, medium or technology now known or later developed.</p>\n  <h2>Submissions:</h2>\n  <p>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback or other information about the Service (\"Submissions\"), provided by you to Amicus are non-confidential and Amicus will be entitled to the unrestricted use and dissemination of these Submissions for any purpose, commercial or otherwise, without acknowledgment or compensation to you.</p>\n  <h2>Indemnity</h2>\n  <p>You agree to release, indemnify and hold Amicus and its affiliates and their officers, employees, directors and agent harmless from any from any and all losses, damages, expenses, including reasonable attorneys' fees, rights, claims, actions of any kind and injury (including death) arising out of or relating to your use of the Service, any User Content, your connection to the Service, your violation of these Terms of Service or your violation of any rights of another.</p>\n  <h1>Social Networking Services</h1>\n  <p>You may enable or log in to the Service via various online third party services, such as social media and social networking services like Facebook or Twitter (\"Social Networking Services\"). By logging in or directly integrating these Social Networking Services into the Service, we make your online experiences richer and more personalized. To take advantage of this feature and capabilities, we may ask you to authenticate, register for or log into Social Networking Services on the websites of their respective providers. As part of such integration, the Social Networking Services will provide us with access to certain information that you have provided to such Social Networking Services, and we will use, store and disclose such information in accordance with our Privacy Policy. For more information about the implications of activating these Social Networking Services and Amicus's use, storage and disclosure of information related to you and your use of such services within Amicus (including your friend lists and the like), please see our Privacy Policy. However, please remember that the manner in which Social Networking Services use, store and disclose your information is governed solely by the policies of such third parties, and Amicus shall have no liability or responsibility for the privacy practices or other actions of any third party site or service that may be enabled within the Service.</p>\n  <p>In addition, Amicus is not responsible for the accuracy, availability or reliability of any information, content, goods, data, opinions, advice or statements made available in connection with Social Networking Services. As such, Amicus is not liable for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such Social Networking Services. Amicus enables these features merely as a convenience and the integration or inclusion of such features does not imply an endorsement or recommendation.</p>\n  <h1>No Warranty</h1>\n  <p>AMICUS MAKES THE SERVICE AVAILABLE SOLELY ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR OTHERWISE.</p>\n  <h1>Exclusion of Liability</h1>\n  <p>THE SERVICES AND FEATURES OF OUR SERVICE MAY HAVE TYPOGRAPHICAL ERRORS OR INACCURACIES. AMICUS RESERVES THE RIGHT TO CHANGE, SUSPEND, OR DISCONTINUE ALL OR ANY PART OF THE SERVICE AT ANY TIME WITHOUT PRIOR NOTICE OR LIABILITY.</p>\n  <p>TO THE GREATEST EXTENT ALLOWED BY APPLICABLE LAW, AMICUS WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF OR INABILITY TO USE THE SERVICE. YOU EXPRESSLY AGREE THAT YOUR USE OF THE SERVICE IS SOLELY AT YOUR OWN RISK. IN NO EVENT SHALL AMICUS BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, OR CONSEQUENTIAL DAMAGES INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF OUR SERVICE, WITH THE DELAY OR INABILITY TO USE OUR SERVICE, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH OUR SERVICE, OR OTHERWISE ARISING OUT OF THE USE OF THE SERVICE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF AMICUS AND/OR ANY OF ITS SUPPLIERS, CLIENTS AND/OR CUSTOMERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES.</p>\n  <p>AMICUS DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY SERVICE PROVIDED AND/OR PROMISED BY A THIRD PARTY THROUGH THE OUR SERVICE.</p>\n  <p>YOU EXPRESSLY UNDERSTAND AND AGREE THAT AMICUS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY DAMAGES, OR DAMAGES FOR LOSS OF PROFITS INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF AMICUS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, RESULTING FROM: (I) THE USE OR THE INABILITY TO USE THE SERVICE; (II) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE SERVICE; (III) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (IV) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICE; OR (V) ANY OTHER MATTER RELATING TO THE SERVICE. IN NO EVENT WILL AMICUS'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES OR CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID AMICUS IN THE LAST SIX (6) MONTHS, OR, IF GREATER, ONE HUNDRED DOLLARS ($100).</p>\n  <p>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS SET FORTH ABOVE MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SERVICE OR WITH THESE TERMS OF SERVICE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USE OF THE SERVICE.</p>\n  <h1>General</h1>\n  <p>These Terms are governed by the laws of the State of New York, without regard to the rules of the conflict of law that may cause the laws of another jurisdiction to apply. Any claim or dispute between you and Amicus that rises fully or in part from the App will be decided exclusively by a court of competent jurisdiction located in Kings County, New York, unless submitted to arbitration.</p>\n  <p>Unless otherwise specified, these terms and conditions constitute the full agreement between Amicus and the User and supersedes any prior agreement, whether written, oral, or electronic with respect to agreements concerning all access to and use of the Service. Except to the limited extent described herein, these Terms shall not be construed as creating or acknowledging a joint venture, partnership, or relationship between the parties.</p>\n  <h1>No Waiver</h1>\n  <p>Failure of Amicus to exercise or enforce these rights or any provisions of these Terms shall not be deemed a waiver of such right or provision.</p>\n  <h2>Contact Information</h2>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "address-component", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});