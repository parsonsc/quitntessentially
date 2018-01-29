<?php
require(__DIR__ . '/../vendor/autoload.php');
$dotenv = new Dotenv\Dotenv(__DIR__ . '/..');
$dotenv->load();

// Define variables for the Sales Force web to lead form
$salesForceSubDomain = getenv('SALES_FORCE_SUB_DOMAIN');
$webToLeadOID = getenv('WEB_TO_LEAD_OID');
$recordType = getenv('RECORD_TYPE');
$leadSource = getenv('LEAD_SOURCE');
$protocol = isset($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) === 'on' ? 'https' : 'http';

// Following form submission Sales Force will redirect the user to this URL
// The bookmark should also bump the user down the page so they can see the thank you message
$retURL = sprintf("%s://%s%s?submitted=true#form-section", $protocol, $_SERVER['HTTP_HOST'], $_SERVER['REQUEST_URI']);

// Check if Sales Force is returning the user to this page following a form submission
// If they were we just display the thank message and remove the form
$userWasRedirected = isset($_GET['submitted']) ? true : false;
?>
<!doctype html>
<html class="no-js" lang="">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>QCTM - Contact Us</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<link rel='shortcut icon' type='image/icon' href='images/layout/icon.ico' />
		<script src="js/modernizr-3.5.0.min.js"></script>
		
		<link rel="stylesheet" href="css/qctm.css">
		
	</head>
	<body class="contact">
		<!--[if lte IE 8]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
		<![endif]-->
		
		<!-- Site container -->
		<div class="site_container">
			<header class="header">
				
				<!-- Logo -->
				<div class="branding">
					<div class="logo">
						<a href="index.html">
							<img src="images/layout/logo.png" alt="QCTM">
						</a>
					</div>
					<div class="mobile_menu">
						<i class="fa fa-bars" aria-hidden="true"></i>
					</div>
					<!-- Primary navigation -->
					<nav class="nav primary_nav">
						<ul>
							<li class="list_item">
								<a href="about/who-we-are.html">Who We Are</a>
							</li>
							<li class="list_item">
								<a href="about/what-we-do.html">What We Do</a>
							</li>
							<li class="list_item services">
								Services <img src="images/layout/down_arrow.png" alt="Services">
								<div class="dropdown_container">
									<ul class="dropdown">
										<li><a href="services/worldwide-air.html">Worldwide Air</a></li>
										<li><a href="services/worldwide-hotels.html">Worldwide Hotels</a></li>
										<li><a href="services/account-management.html">Account Management</a></li>
										<li><a href="services/emergency-service.html">Emergency Services</a></li>
										<li><a href="services/private-leisure-travel.html">Private Leisure Travel</a></li>
										<li><a href="services/concierge.html">Concierge</a></li>
										<li><a href="services/meetings-incentives-corporate-events.html">Meetings, Incentives &amp; Corporate Retreats</a></li>
									</ul>
								</div>
							</li>
							<li class="list_item contact cta">
								<a href="contact-us.php">Contact us</a>
							</li>
                            <li class="list_item phone">
                                <a href="tel:+19176348612"><span><img src="images/layout/phone.jpg" alt=""></span>917 634 8612</a>
                            </li>
						</ul>
					</nav>
				</div>
				<!-- End logo -->
			</header>
			<!-- End Header -->
			<!-- Main content -->
			<main class="main_content">
				<!-- Hero banner -->
				<section  class="banner hero_banner contact_hero_banner">
					<div class="container">
						<div class="banner__content">
							<h2 class="os-animation" data-os-animation="fadeInDown" data-os-animation-delay="0s">Quintessentially</h2>
							<h3 class="os-animation" data-os-animation="fadeInDown" data-os-animation-delay="0s">Corporate Travel Management</h3>
							<h1 class="os-animation" data-os-animation="fadeIn" data-os-animation-delay="0.4s">communication is<br />key to achieving a<br />winning partnership</h1>
							<p class="os-animation" data-os-animation="fadeIn" data-os-animation-delay="0.8s">QCTM believes communication is key to achieving a winning partnership and provides continued support and guidance every step of the way.</p>
							<br>
							<p class="os-animation" data-os-animation="fadeIn" data-os-animation-delay="1.2s">This combined with over 40 years in business and Quintessentially’s global network, guarantees we will deliver an above and beyond service. </p>
						</div>
					</div>
				</section>
				<!-- End hero banner -->
				
				<section class="form_section" id="form-section">
					<div class="container">
						<div class="col-sm-6 os-animation" data-os-animation="fadeIn" data-os-animation-delay="0.2s">
							<div class="form_intro">
								<h3>For further information on how QCTM can assist with your business travel solutions, please get in touch.<br /><br /><br />515 W 20th Street,<br />Suite 6W,<br />New York NY 10011<br />917 634 8612</h3>
							</div>							
						</div>
						
						<!-- Form -->
						<div class="col-sm-6 os-animation" data-os-animation="fadeIn" data-os-animation-delay="0.6s">
							<div class="form_container">
                                
                                <?php if ($userWasRedirected): ?>

                                <div class="form_group thank_you">
                                    <p><em>Thank you for your enquiry. One of our team will be in contact with you.</em></p>
                                </div>
                                
                                <?php else: ?>

                                <form action="https://<?php echo $salesForceSubDomain; ?>.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST" name="contactForm">
                                    <input type=hidden name="oid" value="<?php echo $webToLeadOID; ?>">
                                    <input type=hidden name="retURL" value="<?php echo $retURL; ?>">
                                    <div class="form_group">
                                        <div class="has-float-label">
                                            <input id="first_name" maxlength="40" name="first_name" size="20" type="text" placeholder="First Name *" />
                                            <label for="first_name">First Name <sup>*</sup></label>
                                        </div>
                                    </div>
                                    <div class="form_group">
                                        <div class="has-float-label">
                                            <input id="last_name" maxlength="80" name="last_name" size="20" type="text" placeholder="Last Name *"  />
                                            <label for="last_name">Last Name <sup>*</sup></label>
                                        </div>
                                    </div>
                                    <div class="form_group">
                                        <div class="has-float-label">
                                            <input id="title" maxlength="40" name="title" size="20" type="text" placeholder="Job Title *"  />
                                            <label for="title">Job Title <sup>*</sup></label>
                                        </div>
                                    </div>
                                    <div class="form_group">
                                        <div class="has-float-label">
                                            <input id="email" maxlength="80" name="email" size="20" type="email" placeholder="Email *" />
                                            <label for="email">Email <sup>*</sup></label>
                                        </div>
                                    </div>
                                    <div class="form_group">
                                        <div class="has-float-label">
                                            <input id="phone" maxlength="40" name="phone" size="20" type="text" placeholder="Phone *" />
                                            <label for="phone">Phone <sup>*</sup></label>
                                        </div>
                                    </div>
                                    <div class="form_group custom_select">
                                        <div class="has-float-label">

                                            <label for="Country">Country <sup>*</sup></label>
                                            <select id="00N20000001BDvF" name="00N20000001BDvF" title="Country" class="select_color" >
                                                <option value="">Country</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antarctica">Antarctica</option>
                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bonaire">Bonaire</option>
                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Bouvet Island">Bouvet Island</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="British West Indies">British West Indies</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cayman Islands">Cayman Islands</option>
                                                <option value="Central African Republic">Central African Republic</option>
                                                <option value="Chad">Chad</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Curaçao">Curaçao</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="East Timor">East Timor</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="French Guiana">French Guiana</option>
                                                <option value="French Polynesia">French Polynesia</option>
                                                <option value="French Southern Territories">French Southern Territories</option>
                                                <option value="French West Indies">French West Indies</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Gibraltar">Gibraltar</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Greenland">Greenland</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guernsey">Guernsey</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Heard and McDonald Islands">Heard and McDonald Islands</option>
                                                <option value="Himalayas">Himalayas</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong SAR">Hong Kong SAR</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Isle Of Man">Isle Of Man</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Ivory Coast">Ivory Coast</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jersey">Jersey</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea (North)">Korea (North)</option>
                                                <option value="Korea (South)">Korea (South)</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Macau SAR">Macau SAR</option>
                                                <option value="Macedonia">Macedonia</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Martinique">Martinique</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Micronesia">Micronesia</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montenegro">Montenegro</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Namibia">Namibia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                <option value="New Caledonia">New Caledonia</option>
                                                <option value="New Zealand (Aotearoa)">New Zealand (Aotearoa)</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Island">Norfolk Island</option>
                                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Pitcairn">Pitcairn</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Puerto Rico">Puerto Rico</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="S. Georgia and S. Sandwich Isls.">S. Georgia and S. Sandwich Isls.</option>
                                                <option value="Saint Barthélemy">Saint Barthélemy</option>
                                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                <option value="Saint Lucia">Saint Lucia</option>
                                                <option value="Saint Martin">Saint Martin</option>
                                                <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                <option value="Sardinia">Sardinia</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Scotland">Scotland</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovak Republic">Slovak Republic</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="St. Helena">St. Helena</option>
                                                <option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
                                                <option value="St Vincent and the Grenadines">St Vincent and the Grenadines</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
                                                <option value="Swaziland">Swaziland</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States">United States</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="USA">USA</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatican City State (Holy See)">Vatican City State (Holy See)</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                                <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
                                                <option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option>
                                                <option value="Western Sahara">Western Sahara</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Yugoslavia">Yugoslavia</option>
                                                <option value="Zaire">Zaire</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form_group">
                                        <div class="has-float-label">
                                            <textarea  id="00N20000003I171" name="00N20000003I171" rows="5" type="text" wrap="soft" placeholder="Message: *"></textarea>
                                            <label for="message">Message: <sup>*</sup></label>
                                        </div>
                                    </div>
                                    <input type=hidden name="recordType" id="recordType" value="<?php echo $recordType; ?>"><br>
                                    <input type=hidden name="lead_source" id="lead_source" value="<?php echo $leadSource; ?>"><br>

                                    <div class="form_group submit">
                                        <div class="has-float-label">
                                            <button type="submit" name="submit" class="submit cta">Send</button>
                                        </div>
                                    </div>
                                </form>
                                
                                <?php endif; ?>
                                
							</div>
						</div>
					</div>
				</section>
				
			</main>
			<!-- End main content -->
			
			<footer class="site_footer">
				<div class="footer_navigation">
					<nav class="footer_nav">
						<ul class="col-sm-4">
							<li class="list_title">About us</li>
							<li><a href="about/who-we-are.html">Who We Are</a></li>
							<li><a href="about/what-we-do.html">What We Do</a></li>
						</ul>
						<ul class="col-sm-4">
							<li class="list_title">Services</li>
							<li><a href="services/worldwide-air.html">Worldwide Air</a></li>
							<li><a href="services/worldwide-hotels.html">Worldwide Hotels</a></li>
							<li><a href="services/account-management.html">Account Management</a></li>
							<li><a href="services/emergency-service.html">Emergency Services</a></li>
							<li><a href="services/private-leisure-travel.html">Private Leisure Travel</a></li>
							<li><a href="services/concierge.html">Concierge</a></li>
							<li><a href="services/meetings-incentives-corporate-events.html">Meetings, Incentives &amp; Corporate Retreats</a></li>
						</ul>
						<ul class="col-sm-4">
							<li class="list_title">Contact us</li>
							<li class="email"><a href="mailto:info@quintessentiallyctm.com">info@quintessentiallyctm.com</a></li>
                            <li><a href="tel:+19176348612">917 634 8612</a></li>
							<li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
                            <li>515 W 20th Street,<br />Suite 6W,<br />New York NY 10011</li>
                 
						</ul>
						
					</nav>
				</div>
				<div class="footer_bar">
					<a href="index.html"><img src="images/layout/qctm_footer_logo.png" alt="QCTM"></a>
				</div>
			</footer>
		</div>
		<!-- End site container  -->
		<!-- Scripts -->
		<script src="js/jquery-3.2.1.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script src="js/plugins.js"></script>
		<script src="js/main.js"></script>
	</body>
</html>