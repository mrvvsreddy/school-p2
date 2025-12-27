import React from 'react';
import {
    Users,
    GraduationCap,
    UserCircle,
    DollarSign,
    MoreHorizontal,
    ArrowRight,
    Search,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Eye,
    ChevronLeft,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';

const AdminDashboard = () => {
    // --- Mock Data for Charts ---
    const attendanceData = [
        { name: 'Jan', present: 95, absent: 5 },
        { name: 'Feb', present: 88, absent: 12 },
        { name: 'Mar', present: 92, absent: 8 },
        { name: 'Apr', present: 96, absent: 4 },
        { name: 'May', present: 91, absent: 9 },
        { name: 'Jun', present: 85, absent: 15 },
        { name: 'Jul', present: 90, absent: 10 },
        { name: 'Aug', present: 94, absent: 6 },
        { name: 'Sep', present: 97, absent: 3 },
        { name: 'Oct', present: 93, absent: 7 },
        { name: 'Nov', present: 89, absent: 11 },
        { name: 'Dec', present: 95, absent: 5 },
    ];

    const studentData = [
        { name: 'Male', value: 55, color: '#FFAB91' }, // Orange/Peach
        { name: 'Female', value: 45, color: '#2C3E50' }, // Dark Blue
    ];

    // --- Mock Data for Notices ---
    const notices = [
        {
            id: 1,
            title: "Inter-school competition",
            subtitle: "(sports/singing/drawing/drama)",
            date: "10 Feb, 2023",
            views: "7k",
            img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=100&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Disciplinary action if school",
            subtitle: "discipline is not followed",
            date: "6 Feb, 2023",
            views: "7k",
            img: "https://images.unsplash.com/photo-1577896335477-0237136f3065?q=80&w=100&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "School Annual function",
            subtitle: "celebration 2023-24",
            date: "2 Feb, 2023",
            views: "7k",
            img: "https://images.unsplash.com/photo-1549652127-2eec5c8e31ba?q=80&w=100&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Returning library books timely",
            subtitle: "(Usually pinned on notice...)",
            date: "31 Jan, 2023",
            views: "7k",
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=100&auto=format&fit=crop"
        }
    ];

    return (
        <div className="space-y-6">

            {/* Top Row Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { label: 'Students', value: '1260', icon: Users, bg: 'bg-white' },
                    { label: 'Teachers', value: '224', icon: GraduationCap, bg: 'bg-white' },
                    { label: 'Parents', value: '840', icon: UserCircle, bg: 'bg-white' },
                ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                        <div key={idx} className={`${stat.bg} p-4 rounded-2xl shadow-sm flex items-start justify-between relative overflow-hidden group hover:shadow-md transition-all`}>
                            {/* Background texture optional */}
                            <div className="z-10">
                                <p className="text-slate-400 text-xs font-medium mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-400 group-hover:text-white transition-colors">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Middle Row: Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                {/* Attendance Chart */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-base font-bold text-slate-800">Attendance</h3>
                            <div className="flex items-center gap-3 mt-1">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#2C3E50]"></span>
                                    <span className="text-[10px] text-slate-500">Present</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAB91]"></span>
                                    <span className="text-[10px] text-slate-500">Absent</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span>2023</span>
                            <MoreHorizontal size={16} />
                        </div>
                    </div>

                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={attendanceData} barGap={8}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#94a3b8' }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fontSize: 12, fill: '#94a3b8' }}
                                />
                                <Tooltip
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <Bar dataKey="present" fill="#2C3E50" radius={[4, 4, 0, 0]} barSize={12} />
                                <Bar dataKey="absent" fill="#FFAB91" radius={[4, 4, 0, 0]} barSize={12} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Students Pie Chart */}
                <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col items-center justify-between">
                    <div className="w-full flex justify-between items-start mb-2">
                        <h3 className="text-base font-bold text-slate-800">Students</h3>
                        <MoreHorizontal className="text-slate-400" size={16} />
                    </div>

                    <div className="relative w-full h-56 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={studentData}
                                    innerRadius={70}
                                    outerRadius={90}
                                    paddingAngle={0}
                                    dataKey="value"
                                    startAngle={90}
                                    endAngle={-270}
                                    stroke="none"
                                >
                                    {studentData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Icon */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 shadow-inner">
                                <Users size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center gap-6 mt-2">
                        {studentData.map((item) => (
                            <div key={item.name} className="flex flex-col items-center">
                                <div className="flex items-center gap-1.5 mb-1">
                                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                                    <span className="text-xs font-medium text-slate-500">{item.name}</span>
                                </div>
                                <span className="text-lg font-bold text-slate-800">{item.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AdminDashboard;
