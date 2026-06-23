// pages/what-we-do.tsx (Next.js Pages Router)
import type { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

interface OptionType {
    value: string;
    label: string;
}

const Enquiryform: NextPage = () => {
    const [isClient, setIsClient] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string>(""); // Store error message from backend
    
    const [formData, setFormData] = useState({
        candidateName: "",
        phoneNumber: "",
        email: "",
        country: "",
        state: "",
        city: "",
    });

    const [errors, setErrors] = useState({
        candidateName: "",
        phoneNumber: "",
        email: "",
        country: "",
        state: "",
        city: "",
    });

    const [countryOptions, setCountryOptions] = useState<OptionType[]>([]);
    const [stateOptions, setStateOptions] = useState<OptionType[]>([]);
    const [cityOptions, setCityOptions] = useState<OptionType[]>([]);
    
    const [loadingStates, setLoadingStates] = useState({
        countries: false,
        states: false,
        cities: false,
    });

    const [selectedCountry, setSelectedCountry] = useState<OptionType | null>(null);
    const [selectedState, setSelectedState] = useState<OptionType | null>(null);
    const [selectedCity, setSelectedCity] = useState<OptionType | null>(null);

    useEffect(() => {
        setIsClient(true);
        loadCountries();
        
        const timer = setTimeout(() => {
            setIsPopupOpen(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const loadCountries = () => {
        setLoadingStates(prev => ({ ...prev, countries: true }));
        try {
            const countries = Country.getAllCountries();
            const options = countries.map((country) => ({
                value: country.isoCode,
                label: country.name,
            }));
            setCountryOptions(options);

            const india = options.find(opt => opt.label === "India");
            if (india) {
                setSelectedCountry(india);
                setFormData(prev => ({ ...prev, country: india.label }));
                loadStates(india.value);
            }
        } catch (error) {
            console.error("Error loading countries:", error);
        } finally {
            setLoadingStates(prev => ({ ...prev, countries: false }));
        }
    };

    const loadStates = (countryCode: string) => {
        setLoadingStates(prev => ({ ...prev, states: true }));
        try {
            const states = State.getStatesOfCountry(countryCode);
            const options = states.map((state) => ({
                value: state.isoCode,
                label: state.name,
            }));
            setStateOptions(options);
        } catch (error) {
            console.error("Error loading states:", error);
        } finally {
            setLoadingStates(prev => ({ ...prev, states: false }));
        }
    };

    const loadCities = (countryCode: string, stateCode: string) => {
        setLoadingStates(prev => ({ ...prev, cities: true }));
        try {
            const cities = City.getCitiesOfState(countryCode, stateCode);
            const options = cities.map((city) => ({
                value: city.name,
                label: city.name,
            }));
            setCityOptions(options);
        } catch (error) {
            console.error("Error loading cities:", error);
        } finally {
            setLoadingStates(prev => ({ ...prev, cities: false }));
        }
    };

    const handleCountryChange = (option: OptionType | null) => {
        setSelectedCountry(option);
        setSelectedState(null);
        setSelectedCity(null);
        setStateOptions([]);
        setCityOptions([]);
        
        setFormData(prev => ({
            ...prev,
            country: option?.label || "",
            state: "",
            city: "",
        }));

        setErrors(prev => ({ ...prev, country: "" }));

        if (option) {
            loadStates(option.value);
        }
    };

    const handleStateChange = (option: OptionType | null) => {
        setSelectedState(option);
        setSelectedCity(null);
        setCityOptions([]);
        
        setFormData(prev => ({
            ...prev,
            state: option?.label || "",
            city: "",
        }));

        setErrors(prev => ({ ...prev, state: "" }));

        if (option && selectedCountry) {
            loadCities(selectedCountry.value, option.value);
        }
    };

    const handleCityChange = (option: OptionType | null) => {
        setSelectedCity(option);
        setFormData(prev => ({
            ...prev,
            city: option?.label || "",
        }));
        setErrors(prev => ({ ...prev, city: "" }));
    };

    const validateName = (name: string): string => {
        if (!name.trim()) return "Full name is required";
        if (!/^[a-zA-Z\s-']+$/.test(name)) return "Name should only contain letters, spaces, hyphens, and apostrophes";
        if (name.trim().length < 2) return "Name must be at least 2 characters";
        return "";
    };

    const validatePhone = (phone: string): string => {
        if (!phone.trim()) return "Phone number is required";
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length !== 10) return "Phone number must be exactly 10 digits";
        if (!/^[6-9]\d{9}$/.test(cleaned)) return "Phone number must start with 6, 7, 8, or 9";
        return "";
    };

    const validateEmail = (email: string): string => {
        if (!email.trim()) return "";
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) return "Please enter a valid email address";
        return "";
    };

    const validateCountry = (country: string): string => {
        if (!country.trim()) return "Country is required";
        return "";
    };

    const validateState = (state: string): string => {
        if (!state.trim()) return "State is required";
        return "";
    };

    const validateCity = (city: string): string => {
        if (!city.trim()) return "City is required";
        return "";
    };

    const validateForm = (): boolean => {
        const nameError = validateName(formData.candidateName);
        const phoneError = validatePhone(formData.phoneNumber);
        const emailError = validateEmail(formData.email);
        const countryError = validateCountry(formData.country);
        const stateError = validateState(formData.state);
        const cityError = validateCity(formData.city);

        setErrors({
            candidateName: nameError,
            phoneNumber: phoneError,
            email: emailError,
            country: countryError,
            state: stateError,
            city: cityError,
        });

        return !(nameError || phoneError || emailError || countryError || stateError || cityError);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));

        if (name === "phoneNumber") {
            const digitsOnly = value.replace(/\D/g, '');
            if (digitsOnly.length <= 10) {
                setFormData(prev => ({ ...prev, phoneNumber: digitsOnly }));
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            const firstErrorField = document.querySelector('.error-field');
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage(""); // Clear previous error message

        const payload = {
            instituteId: "INS-0VVEACMY",
            programId: "MSINDS0072",
            candidateName: formData.candidateName.trim(),
            phoneNumber: formData.phoneNumber,
            email: formData.email || "",
            country: formData.country,
            state: formData.state,
            city: formData.city,
            status: "New",
            communication: "Online",
            followUpDate: new Date().toISOString().split('T')[0],
            description: "This lead enquiry has come from online",
            leadSource: "online"
        };

        try {
            const response = await fetch("https://hikabackend.sonastar.com/api/leads/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const responseData = await response.json();

            if (response.ok) {
                setSubmitStatus("success");
                console.log("Enquiry submitted successfully:", responseData);

                setTimeout(() => {
                    setIsPopupOpen(false);
                    setFormData({
                        candidateName: "",
                        phoneNumber: "",
                        email: "",
                        country: selectedCountry?.label || "",
                        state: "",
                        city: "",
                    });
                    setSelectedState(null);
                    setSelectedCity(null);
                    setStateOptions([]);
                    setCityOptions([]);
                    setSubmitStatus("idle");
                    setErrorMessage("");
                    setErrors({
                        candidateName: "",
                        phoneNumber: "",
                        email: "",
                        country: "",
                        state: "",
                        city: "",
                    });

                    if (selectedCountry) {
                        loadStates(selectedCountry.value);
                    }
                }, 4000);
            } else {
                // Show the exact error message from backend
                console.error("API Error Response:", responseData);
                setSubmitStatus("error");
                
                // Extract error message from response
                if (responseData.message) {
                    setErrorMessage(responseData.message);
                } else if (responseData.error) {
                    setErrorMessage(responseData.error);
                } else {
                    setErrorMessage("Something went wrong. Please try again.");
                }
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus("error");
            setErrorMessage("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Simplified react-select styles
    const customSelectStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            borderColor: state.isFocused ? '#078671' : '#d1d5db',
            boxShadow: state.isFocused ? '0 0 0 2px rgba(7, 134, 113, 0.1)' : 'none',
            '&:hover': {
                borderColor: '#078671',
            },
            minHeight: '42px',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#078671' : state.isFocused ? '#f0fdfa' : 'white',
            color: state.isSelected ? 'white' : '#1f2937',
            fontSize: '0.875rem',
        }),
        placeholder: (provided: any) => ({
            ...provided,
            color: '#9ca3af',
            fontSize: '0.875rem',
        }),
        menu: (provided: any) => ({
            ...provided,
            zIndex: 9999,
            borderRadius: '0.375rem',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }),
        menuList: (provided: any) => ({
            ...provided,
            maxHeight: '200px',
        }),
        indicatorSeparator: (provided: any) => ({
            ...provided,
            backgroundColor: '#d1d5db',
        }),
        dropdownIndicator: (provided: any) => ({
            ...provided,
            color: '#6b7280',
            '&:hover': {
                color: '#078671',
            },
        }),
    };

    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const { ref: contentRef, inView: contentInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const imageVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                staggerChildren: 0.2
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.7 }
        },
        hover: {
            scale: 1.02,
            transition: { type: "spring", stiffness: 400 }
        },
        tap: { scale: 0.98 }
    };

    const frameVariants = {
        hidden: { opacity: 0, x: -20, y: -20 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut", delay: 0.1 }
        }
    };

    const dotGridVariants = {
        hidden: { opacity: 0, rotate: -45, scale: 0.8 },
        visible: {
            opacity: 0.2,
            rotate: 0,
            scale: 1,
            transition: { duration: 0.6, delay: 0.3 }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const popupVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: 20,
            transition: { duration: 0.2 }
        }
    };

    return (
        <main className="bg-white flex items-center justify-center pt-16 overflow-hidden">
            <section className="w-full mx-auto max-w-[1440px] px-6 ">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* LEFT: Content block */}
                    <motion.div
                        ref={contentRef}
                        className="w-full lg:w-[55%]"
                        variants={contentVariants}
                        initial="hidden"
                        animate={isClient && contentInView ? "visible" : "hidden"}
                    >
                        <motion.div variants={itemVariants}>
                            <h2 className="font-serif text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.2] sm:leading-[1.15] lg:leading-[1.08] text-black mb-1">
                                About MS in Data Science
                            </h2>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <p className="text-[#8c1d32] text-xs sm:text-sm font-semibold tracking-[3px] uppercase mt-3 mb-4 underline underline-offset-4 decoration-gray-400">
                                Master of Science in Data Science
                            </p>
                        </motion.div>

                        <motion.p
                            className="text-sm text-gray-700 leading-relaxed mb-8 text-justify"
                            variants={itemVariants}
                        >
                            With a Master of Science in Data Science Degree from the University of West Alabama, you will learn to blend theory with practical application and prepare to advance your career. This program&apos;s core courses in statistics, programming and machine learning will strengthen your foundational knowledge and help you stand out as a competitive job candidate. With specialized electives and hands-on projects, you will foster both technical expertise and problem-solving skills.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <motion.div variants={itemVariants}>
                                <h3 className="text-[#8c1d32] font-bold text-sm uppercase tracking-wide mb-2">
                                    Flexibility
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    This data science degree gives you the flexibility to fit study into your schedule, allowing you to balance education with professional commitments.
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <h3 className="text-[#8c1d32] font-bold text-sm uppercase tracking-wide mb-2">
                                    Career Ready
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Upon completion, you will have earned the skills and knowledge necessary to advance your data science career with confidence.
                                </p>
                            </motion.div>
                        </div>

                        <motion.button
                            variants={buttonVariants}
                            initial="hidden"
                            animate={isClient && contentInView ? "visible" : "hidden"}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-[#078671] text-white px-8 py-3 rounded-lg font-semibold text-sm tracking-wide hover:bg-[#067864] transition-colors shadow-md"
                        >
                            Admission Enquiry
                        </motion.button>
                    </motion.div>

                    {/* RIGHT: Image block */}
                    <motion.div
                        ref={imageRef}
                        className="relative w-full lg:w-[45%] flex-shrink-0"
                        variants={imageVariants}
                        initial="hidden"
                        animate={isClient && imageInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            className="absolute -top-4 -left-4 w-[85%] h-[85%] border-2 border-[#078671] z-0"
                            variants={frameVariants}
                        />

                        <motion.div
                            className="relative z-10 w-full h-[260px] lg:h-[320px] overflow-hidden rounded-lg"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img
                                src="https://img.magnific.com/premium-vector/data-science-artificial-intelligence-big-data-machine-learning-sphere-with-surface-hexagons_127544-3154.jpg?uid=R224290380&ga=GA1.1.1847424523.1777460742&semt=ais_hybrid&w=740&q=80"
                                alt="Data Science illustration"
                                className="w-full h-full object-cover"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        <motion.div
                            className="absolute bottom-0 right-0 z-20 bg-[#078671] text-white px-6 py-5 text-center min-w-[130px] rounded-lg shadow-lg"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, y: 30 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                        delay: 0.6
                                    }
                                }
                            }}
                        >
                            <p className="text-4xl font-extrabold leading-none">Top</p>
                            <p className="text-sm font-semibold tracking-wider mt-1 uppercase">Ranked</p>
                            <p className="text-xs font-bold tracking-[0.2em] uppercase">Program</p>
                        </motion.div>

                        <motion.div
                            className="absolute -top-6 -right-6 w-24 h-24 z-0 opacity-20"
                            style={{
                                backgroundImage: "radial-gradient(circle, #078671 1px, transparent 1px)",
                                backgroundSize: "8px 8px",
                            }}
                            variants={dotGridVariants}
                        />
                    </motion.div>
                </div>
            </section>

            {/* SIMPLIFIED POPUP MODAL */}
            <AnimatePresence>
                {isPopupOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => setIsPopupOpen(false)}
                    >
                        <motion.div
                            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            variants={popupVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Simple Header */}
                            <div className="border-b border-gray-200 p-6">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">Admission Enquiry</h2>
                                        <p className="text-gray-500 text-sm mt-1">
                                            Fill in your details and we'll get back to you
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setIsPopupOpen(false)}
                                        className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Clean Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                                {/* Two-column grid for name and phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="candidateName"
                                            value={formData.candidateName}
                                            onChange={handleInputChange}
                                            required
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#078671] focus:border-transparent outline-none transition ${
                                                errors.candidateName ? 'border-red-500 error-field' : 'border-gray-300'
                                            }`}
                                            placeholder="John Doe"
                                        />
                                        {errors.candidateName && (
                                            <p className="text-red-500 text-xs mt-1">{errors.candidateName}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            required
                                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#078671] focus:border-transparent outline-none transition ${
                                                errors.phoneNumber ? 'border-red-500 error-field' : 'border-gray-300'
                                            }`}
                                            placeholder="9876543210"
                                            maxLength={10}
                                        />
                                        {errors.phoneNumber && (
                                            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Email - Full width */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email <span className="text-gray-400">(optional)</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#078671] focus:border-transparent outline-none transition ${
                                            errors.email ? 'border-red-500 error-field' : 'border-gray-300'
                                        }`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Location - Three columns */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Country <span className="text-red-500">*</span>
                                        </label>
                                        <Select
                                            options={countryOptions}
                                            value={selectedCountry}
                                            onChange={handleCountryChange}
                                            placeholder="Select country"
                                            isLoading={loadingStates.countries}
                                            styles={customSelectStyles}
                                            className={`react-select-container ${errors.country ? 'error-field' : ''}`}
                                            classNamePrefix="react-select"
                                            noOptionsMessage={() => "No country found"}
                                        />
                                        {errors.country && (
                                            <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            State <span className="text-red-500">*</span>
                                        </label>
                                        <Select
                                            options={stateOptions}
                                            value={selectedState}
                                            onChange={handleStateChange}
                                            placeholder="Select state"
                                            isLoading={loadingStates.states}
                                            isDisabled={!selectedCountry}
                                            styles={customSelectStyles}
                                            className={`react-select-container ${errors.state ? 'error-field' : ''}`}
                                            classNamePrefix="react-select"
                                            noOptionsMessage={() => 
                                                selectedCountry ? "No states found" : "Select country first"
                                            }
                                        />
                                        {errors.state && (
                                            <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            City <span className="text-red-500">*</span>
                                        </label>
                                        <Select
                                            options={cityOptions}
                                            value={selectedCity}
                                            onChange={handleCityChange}
                                            placeholder="Select city"
                                            isLoading={loadingStates.cities}
                                            isDisabled={!selectedState}
                                            styles={customSelectStyles}
                                            className={`react-select-container ${errors.city ? 'error-field' : ''}`}
                                            classNamePrefix="react-select"
                                            noOptionsMessage={() => 
                                                selectedState ? "No cities found" : "Select state first"
                                            }
                                        />
                                        {errors.city && (
                                            <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Hidden fields */}
                                <input type="hidden" name="instituteId" value="INS-DHJMFQ6G" />
                                <input type="hidden" name="programId" value="GMBA5H7KQZ" />
                                <input type="hidden" name="status" value="New" />
                                <input type="hidden" name="communication" value="Online" />
                                <input type="hidden" name="leadSource" value="online" />

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-2 rounded-lg text-sm">
                                        ✓ Enquiry submitted successfully! We'll contact you soon.
                                    </div>
                                )}

                                {submitStatus === "error" && errorMessage && (
                                    <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                                        <span className="font-medium">✗ </span>
                                        {errorMessage}
                                    </div>
                                )}

                                {submitStatus === "error" && !errorMessage && (
                                    <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-2 rounded-lg text-sm">
                                        ✗ Something went wrong. Please try again.
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#078671] text-white py-3 rounded-lg font-medium hover:bg-[#067864] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : (
                                        "Submit Enquiry"
                                    )}
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    By submitting, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Enquiryform;