import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const StudentProfileModal = ({ student, onClose }) => {
    // Prevent scrolling on body when modal is open
    useEffect(() => {
        if (student) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [student]);

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(student || {});

    useEffect(() => {
        setFormData(student || {});
        setIsEditing(false); // Reset edit mode on open
    }, [student]);

    if (!student) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // Here you would typically trigger an API call to update the student
        console.log("Saving data:", formData);
        setIsEditing(false);
        // You might want to call a parent onUpdate(formData) here
    };

    const handleCancel = () => {
        setFormData(student || {});
        setIsEditing(false);
    };

    const InputField = ({ label, name, type = "text", value, options }) => {
        if (!isEditing) {
            return (
                <div>
                    <p className="text-xs text-slate-400 font-medium mb-1">{label}</p>
                    <p className="text-sm font-bold text-slate-700">{value || 'N/A'}</p>
                </div>
            );
        }

        return (
            <div>
                <label className="text-xs text-slate-400 font-medium mb-1 block">{label}</label>
                {options ? (
                    <select
                        name={name}
                        value={value}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all font-semibold text-slate-700"
                    >
                        <option value="">Select {label}</option>
                        {options.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                ) : (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all font-bold text-slate-700"
                    />
                )}
            </div>
        );
    };

    return createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] backdrop-blur-sm overflow-y-auto py-10">
            <div className="bg-white rounded-3xl p-8 w-full max-w-5xl shadow-2xl transform transition-all scale-100 my-auto relative m-4 animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer z-10"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col sm:flex-row gap-12">
                    {/* Left Column: Avatar & Basic Info */}
                    <div className="sm:w-1/3 flex flex-col items-center text-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-orange-50 shadow-xl mb-6">
                            <img src={student.img} alt={student.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-slate-800 font-serif mb-2">{formData.name}</h2>
                            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-bold rounded-full">
                                {formData.id}
                            </span>
                        </div>

                        <div className="w-full bg-slate-50 rounded-2xl p-6 mb-6">
                            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-2">CLASS</p>
                            <p className="text-xl font-bold text-slate-800">{formData.class}</p>
                        </div>
                    </div>

                    {/* Right Column: Detailed Details */}
                    <div className="flex-1 space-y-10 py-2">
                        {/* Personal Info Section */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 font-serif">Personal Information</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-8">
                                <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} />
                                <InputField label="Gender" name="gender" value={formData.gender} options={['Male', 'Female', 'Other']} />
                                <InputField label="Blood Group" name="bloodGroup" value={formData.bloodGroup} options={['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']} />
                                <InputField label="Religion" name="religion" value={formData.religion} />
                                <InputField label="Admission ID" name="admissionId" value={formData.admissionId} />
                                <InputField label="Section" name="section" value={formData.section} options={['A', 'B', 'C', 'D']} />
                            </div>
                        </div>

                        {/* Parent Info Section */}
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 font-serif">Parent & Contact</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                                <InputField label="Father's Name" name="parent" value={formData.parent} />
                                <InputField label="Mother's Name" name="motherName" value={formData.motherName} />
                                <InputField label="Phone Number" name="phone" value={formData.phone} />
                                <div className="break-all">
                                    <InputField label="Email Address" name="email" value={formData.email} />
                                </div>
                                <div className="sm:col-span-2">
                                    <InputField label="Residential Address" name="address" value={formData.address} />
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-4 flex gap-4">
                            {!isEditing ? (
                                <>
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="px-6 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors cursor-pointer"
                                    >
                                        Edit Details
                                    </button>
                                    <button className="px-6 py-2.5 rounded-lg border border-red-100 text-red-500 text-xs font-bold uppercase tracking-wider hover:bg-red-50 transition-colors cursor-pointer">
                                        Remove Student
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={handleSave}
                                        className="px-6 py-2.5 rounded-lg bg-[#2C3E50] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1a252f] transition-colors cursor-pointer shadow-lg"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        className="px-6 py-2.5 rounded-lg border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default StudentProfileModal;
