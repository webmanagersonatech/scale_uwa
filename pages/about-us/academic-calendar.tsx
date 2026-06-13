import Link from "next/link";
import { useState, useMemo } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ScheduleEvent {
    date: string; // ISO date string YYYY-MM-DD
    day: string;
    classTime: string;
    classHours: number | string;
    remarks: string;
    totalHours?: number | string;
}

interface MonthGroup {
    month: string;
    year: number;
    events: ScheduleEvent[];
    semesterTotals?: {
        firstSemester: number;
        secondSemester: number;
        total: number;
    };
}

// ─── Data ────────────────────────────────────────────────────────────────────
const CLASS_SCHEDULE: ScheduleEvent[] = [
    // September 2026
    { date: "2026-09-11", day: "Friday", classTime: "10 AM - 5 PM", classHours: 8, remarks: "Commencement of 1st Sem, SONAUWA MS in Data Science", totalHours: 51 },
    { date: "2026-09-12", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2026-09-13", day: "Sunday", classTime: "9:00 AM – 2:00 PM", classHours: 5, remarks: "" },
    { date: "2026-09-19", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2026-09-20", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2026-09-26", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2026-09-27", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    // October 2026
    { date: "2026-10-03", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2026-10-04", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2026-10-10", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2026-10-11", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2026-10-17", day: "Saturday", classTime: "–", classHours: "–", remarks: "Holiday – No class scheduled" },
    { date: "2026-10-18", day: "Sunday", classTime: "–", classHours: "–", remarks: "Holiday – Dussehra (Saptami)" },
    { date: "2026-10-24", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2026-10-25", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2026-10-31", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    // November 2026
    { date: "2026-11-01", day: "Sunday", classTime: "–", classHours: "–", remarks: "Holiday – No class scheduled" },
    { date: "2026-11-07", day: "Saturday", classTime: "–", classHours: "–", remarks: "Holiday – No class scheduled" },
    { date: "2026-11-08", day: "Sunday", classTime: "–", classHours: "–", remarks: "Holiday – Diwali (Deepavali) / Naraka Chaturdasi" },
    { date: "2026-11-14", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2026-11-15", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "Chhat Puja." },
    { date: "2026-11-21", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2026-11-22", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2026-11-28", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2026-11-29", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    // December 2026
    { date: "2026-12-05", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2026-12-06", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2026-12-12", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2026-12-13", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2026-12-19", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2026-12-20", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2026-12-26", day: "Saturday", classTime: "–", classHours: "–", remarks: "Holiday – No class scheduled" },
    { date: "2026-12-27", day: "Sunday", classTime: "–", classHours: "–", remarks: "Holiday – No class scheduled" },
    // January 2027
    { date: "2027-01-02", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "Online class" },
    { date: "2027-01-03", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "Online class" },
    { date: "2027-01-06", day: "Tuesday", classTime: "9:00 AM – 5:00 PM", classHours: "–", remarks: "Preparatory Course (Weekday)" },
    { date: "2027-01-07", day: "Wednesday", classTime: "9:00 AM – 5:00 PM", classHours: "–", remarks: "Preparatory Course (Weekday)" },
    { date: "2027-01-08", day: "Thursday", classTime: "9:00 AM – 5:00 PM", classHours: "–", remarks: "Preparatory Course (Weekday)" },
    { date: "2027-01-09", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: "–", remarks: "1st Semester EXAM" },
    { date: "2027-01-10", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: "–", remarks: "1st Semester EXAM" },
    { date: "2027-01-16", day: "Saturday", classTime: "–", classHours: "–", remarks: "Holiday – No class scheduled" },
    { date: "2027-01-17", day: "Sunday", classTime: "–", classHours: "–", remarks: "Holiday – No class scheduled" },
    { date: "2027-01-23", day: "Saturday", classTime: "–", classHours: "–", remarks: "Holiday – No class scheduled" },
    { date: "2027-01-24", day: "Sunday", classTime: "–", classHours: "–", remarks: "Holiday – No class scheduled" },
    { date: "2027-01-30", day: "Saturday", classTime: "–", classHours: "–", remarks: "Holiday – No class scheduled" },
    { date: "2027-01-31", day: "Sunday", classTime: "–", classHours: "–", remarks: "Holiday – No class scheduled" },
    // February 2027
    { date: "2027-02-06", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "Commencement of 2nd Sem, SONAUWA MS in Data Science" },
    { date: "2027-02-07", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "Application 2nd Year At UWA" },
    { date: "2027-02-13", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2027-02-14", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2027-02-20", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2027-02-21", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2027-02-27", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2027-02-28", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    // March 2027
    { date: "2027-03-06", day: "Saturday", classTime: "–", classHours: "–", remarks: "Holiday – Maha Shivaratri" },
    { date: "2027-03-07", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2027-03-13", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2027-03-14", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2027-03-20", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2027-03-21", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2027-03-27", day: "Saturday", classTime: "–", classHours: "–", remarks: "Holiday – No class scheduled" },
    { date: "2027-03-28", day: "Sunday", classTime: "–", classHours: "–", remarks: "Holiday – Easter Day" },
    // April 2027
    { date: "2027-04-03", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2027-04-04", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2027-04-10", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2027-04-11", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2027-04-17", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2027-04-18", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2027-04-24", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2027-04-25", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    // May 2027
    { date: "2027-05-01", day: "Saturday", classTime: "–", classHours: "–", remarks: "Holiday – Labour Day / May Day" },
    { date: "2027-05-02", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: 7, remarks: "" },
    { date: "2027-05-08", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2027-05-09", day: "Sunday", classTime: "–", classHours: "–", remarks: "Holiday – Basava Jayanthi" },
    { date: "2027-05-15", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: 8, remarks: "" },
    { date: "2027-05-16", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: "–", remarks: "Preparatory Course (Weekday)" },
    { date: "2027-05-22", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: "–", remarks: "Preparatory Course (Weekday)" },
    { date: "2027-05-23", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: "–", remarks: "Preparatory Course (Weekday)" },
    { date: "2027-05-29", day: "Saturday", classTime: "9:00 AM – 7:00 PM", classHours: "–", remarks: "2 nd Semester EXAM" },
    { date: "2027-05-30", day: "Sunday", classTime: "9:00 AM – 5:00 PM", classHours: "–", remarks: "2 nd Semester EXAM" },
];

// Helper to group events by month/year
function groupByMonth(events: ScheduleEvent[]): MonthGroup[] {
    const groups: Record<string, MonthGroup> = {};

    events.forEach(event => {
        const date = new Date(event.date);
        const monthName = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        const key = `${year}-${date.getMonth()}`;

        if (!groups[key]) {
            groups[key] = {
                month: monthName,
                year: year,
                events: [],
            };
        }
        groups[key].events.push(event);
    });

    // Add semester totals for the two key periods
    const result = Object.values(groups);
    // Add totals metadata to relevant month groups (Sep-Dec for Sem1, Feb-May for Sem2)
    result.forEach(group => {
        if (group.month === 'September' && group.year === 2026) {
            group.semesterTotals = { firstSemester: 209, secondSemester: 180, total: 389 };
        }
    });

    return result;
}

// ─── Helper to get row styling ────────────────────────────────────────────────
function getEventStyle(remarks: string, classHours: number | string): string {
    const lowerRemarks = remarks.toLowerCase();
    if (lowerRemarks.includes('holiday')) return 'bg-gray-50';
    if (lowerRemarks.includes('exam')) return 'bg-red-50';
    if (lowerRemarks.includes('online')) return 'bg-blue-50';
    if (lowerRemarks.includes('preparatory')) return 'bg-yellow-50';
    if (lowerRemarks.includes('commencement')) return 'bg-green-50';
    if (lowerRemarks.includes('application')) return 'bg-purple-50';
    if (classHours !== '–' && typeof classHours === 'number' && classHours > 0) return '';
    return '';
}

function getBadgeForEvent(remarks: string): { text: string; color: string } | null {
    const lowerRemarks = remarks.toLowerCase();
    if (lowerRemarks.includes('holiday')) return { text: 'Holiday', color: 'bg-gray-200 text-gray-700' };
    if (lowerRemarks.includes('exam')) return { text: 'Exam', color: 'bg-red-200 text-red-800' };
    if (lowerRemarks.includes('online')) return { text: 'Online', color: 'bg-blue-200 text-blue-800' };
    if (lowerRemarks.includes('preparatory')) return { text: 'Prep', color: 'bg-yellow-200 text-yellow-800' };
    if (lowerRemarks.includes('commencement')) return { text: 'Start', color: 'bg-green-200 text-green-800' };
    if (lowerRemarks.includes('application')) return { text: 'Apply', color: 'bg-purple-200 text-purple-800' };
    return null;
}

// ─── Legend Component ─────────────────────────────────────────────────────────
function Legend() {
    const legendItems = [
        { label: "Regular Class Day", color: "bg-white border-gray-300" },
        { label: "Holiday / No Class", color: "bg-gray-50 border-gray-200" },
        { label: "Exam Day", color: "bg-red-50 border-red-200" },
        { label: "Online Class", color: "bg-blue-50 border-blue-200" },
        { label: "Preparatory Course", color: "bg-yellow-50 border-yellow-200" },
        { label: "Application 2nd Year At UWA", color: "bg-purple-50 border-purple-200" },
    ];

    return (
        <div className="bg-white border border-gray-200 p-5 mb-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Legend</h3>
            <div className="flex flex-wrap gap-4">
                {legendItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <div className={`w-5 h-5 border ${item.color}`}></div>
                        <span className="text-xs text-gray-600">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Search Bar Component ─────────────────────────────────────────────────────
interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedMonth: string;
    setSelectedMonth: (month: string) => void;
    months: { value: string; label: string }[];
    onClearFilters: () => void;
}

function SearchBar({ searchQuery, setSearchQuery, selectedMonth, setSelectedMonth, months, onClearFilters }: SearchBarProps) {
    const hasActiveFilters = searchQuery.trim() !== "" || selectedMonth !== "";

    return (
        <div className="bg-white border border-gray-200 p-5 mb-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Filter Schedule</h3>
            <div className="flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1">
                    <label htmlFor="search" className="block text-xs text-gray-500 mb-1">Search by Remarks</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by remarks (e.g., Holiday, Exam, Online)..."
                            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#AC1F2D] focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Month Select Dropdown */}
                <div className="w-full md:w-64">
                    <label htmlFor="month-select" className="block text-xs text-gray-500 mb-1">Select Month</label>
                    <select
                        id="month-select"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#AC1F2D] focus:border-transparent bg-white"
                    >
                        <option value="">All Months</option>
                        {months.map((month) => (
                            <option key={month.value} value={month.value}>
                                {month.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Clear Filters Button */}
                {hasActiveFilters && (
                    <div className="flex items-end">
                        <button
                            onClick={onClearFilters}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-[#AC1F2D] border border-gray-300 rounded-md hover:border-[#AC1F2D] transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>

            {/* Active filters summary */}
            {hasActiveFilters && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                        Active filters:{' '}
                        {searchQuery && <span className="inline-block bg-gray-100 rounded-full px-2 py-0.5 mr-2">Search: "{searchQuery}"</span>}
                        {selectedMonth && <span className="inline-block bg-gray-100 rounded-full px-2 py-0.5">Month: {months.find(m => m.value === selectedMonth)?.label}</span>}
                    </p>
                </div>
            )}
        </div>
    );
}

// ─── Month Table Component ────────────────────────────────────────────────────
function MonthCalendar({ monthGroup, searchQuery }: { monthGroup: MonthGroup; searchQuery: string }) {
    const { month, year, events, semesterTotals } = monthGroup;
    
    // Filter events within this month based on search query
    const filteredEvents = useMemo(() => {
        if (!searchQuery.trim()) return events;
        const query = searchQuery.toLowerCase();
        return events.filter(event => 
            event.remarks.toLowerCase().includes(query) ||
            event.day.toLowerCase().includes(query) ||
            event.classTime.toLowerCase().includes(query) ||
            (typeof event.classHours === 'string' && event.classHours.toLowerCase().includes(query)) ||
            (typeof event.classHours === 'number' && event.classHours.toString().includes(query))
        );
    }, [events, searchQuery]);

    // If no events match the search in this month, don't render the month
    if (filteredEvents.length === 0) return null;

    return (
        <div className="mb-10">
            <div className="flex items-baseline justify-between border-b-2 border-gray-200 pb-2 mb-4">
                <h2 className="text-2xl font-serif font-semibold text-gray-800">
                    {month} {year}
                </h2>
                {semesterTotals && (
                    <div className="text-xs text-gray-500 space-x-3">
                        <span>Sem 1: {semesterTotals.firstSemester}h</span>
                        <span>Sem 2: {semesterTotals.secondSemester}h</span>
                        <span className="font-semibold">Total: {semesterTotals.total}h</span>
                    </div>
                )}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                            <th className="text-left py-3 px-3 font-semibold text-gray-700">Date</th>
                            <th className="text-left py-3 px-3 font-semibold text-gray-700">Day</th>
                            <th className="text-left py-3 px-3 font-semibold text-gray-700">Class Time</th>
                            <th className="text-left py-3 px-3 font-semibold text-gray-700">Hours</th>
                            <th className="text-left py-3 px-3 font-semibold text-gray-700">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEvents.map((event, idx) => {
                            const rowStyle = getEventStyle(event.remarks, event.classHours);
                            const badge = getBadgeForEvent(event.remarks);
                            const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                            });

                            return (
                                <tr
                                    key={idx}
                                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${rowStyle}`}
                                >
                                    <td className="py-2.5 px-3 text-gray-700 whitespace-nowrap">{formattedDate}</td>
                                    <td className="py-2.5 px-3 text-gray-700">{event.day}</td>
                                    <td className="py-2.5 px-3 font-mono text-xs text-gray-600 whitespace-nowrap">{event.classTime}</td>
                                    <td className="py-2.5 px-3 font-mono text-xs text-gray-600">{event.classHours}</td>
                                    <td className="py-2.5 px-3 text-gray-700">
                                        {badge ? (
                                            <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-lg  mr-2 ${badge.color}`}>
                                                {badge.text}
                                            </span>
                                        ) : null}
                                        {event.remarks || '—'}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// ─── Breadcrumb ──────────────────────────────────────────────────────────────
function Breadcrumb() {
    return (
        <nav aria-label="Breadcrumb" className="bg-[#f8f5f2] border-b border-[#e0d6ce] py-2.5">
            <div className="max-w-[1440px] mx-auto px-6">
                <ol className="flex items-center gap-1.5 list-none text-[13px] text-[#5a5652] flex-wrap">
                    <li className="flex items-center">
                        <Link href="/" className="text-[#AC1F2D] hover:underline no-underline">Home</Link>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li className="flex items-center">
                        <Link href="/academics" className="text-[#AC1F2D] hover:underline no-underline">Academics</Link>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">Class Schedule</span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}

// ─── Main Calendar Page ───────────────────────────────────────────────────────
export default function CalendarPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    
    // Get all month groups
    const allMonthGroups = useMemo(() => groupByMonth(CLASS_SCHEDULE), []);
    
    // Generate month options for dropdown
    const monthOptions = useMemo(() => {
        return allMonthGroups.map(group => ({
            value: `${group.month}-${group.year}`,
            label: `${group.month} ${group.year}`
        }));
    }, [allMonthGroups]);
    
    // Filter month groups based on selected month
    const filteredMonthGroups = useMemo(() => {
        if (!selectedMonth) return allMonthGroups;
        return allMonthGroups.filter(group => `${group.month}-${group.year}` === selectedMonth);
    }, [allMonthGroups, selectedMonth]);
    
    const clearFilters = () => {
        setSearchQuery("");
        setSelectedMonth("");
    };
    
    const commencementDate = new Date("2026-09-11");
    const formattedCommencement = commencementDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    // Calculate if any results are shown
    const hasResults = filteredMonthGroups.some(group => {
        if (!searchQuery.trim()) return true;
        return group.events.some(event => 
            event.remarks.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.day.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.classTime.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    return (
        <>
            {/* Hero */}
            <section className="bg-gray-50 py-12 lg:py-16">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="lg:max-w-[60%]">
                            <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 text-[11px] tracking-[1.2px] uppercase py-1.5 px-4 rounded-full mb-4">
                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                                Academic Calendar 2026–27
                            </div>
                            <h1 className="font-serif text-4xl lg:text-5xl text-gray-800 font-bold mb-4 leading-tight">
                                Class <span className="text-gray-600">Schedule</span>
                            </h1>
                            <p className="text-gray-600 text-base lg:text-lg max-w-[600px] leading-relaxed">
                                SONAUWA MS in Data Science — Weekend batches, holiday breaks, and exam dates.
                            </p>
                        </div>
                        <div className="bg-white p-4 border border-gray-200 shadow-sm text-center lg:text-left">
                            <div className="text-xs text-gray-500 uppercase tracking-wide">Commencement</div>
                            <div className="text-xl font-bold text-gray-800">{formattedCommencement}</div>
                            <div className="text-xs text-gray-500 mt-1">Classes: Saturdays & Sundays</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <Breadcrumb />

            {/* Main Content */}
            <div className="py-10">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="mx-auto">
                        {/* Legend */}
                        <Legend />
                        
                        {/* Search Bar */}
                        <SearchBar 
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            selectedMonth={selectedMonth}
                            setSelectedMonth={setSelectedMonth}
                            months={monthOptions}
                            onClearFilters={clearFilters}
                        />

                        {/* Monthly Calendar Tables */}
                        {filteredMonthGroups.length > 0 ? (
                            filteredMonthGroups.map((group, idx) => (
                                <MonthCalendar key={idx} monthGroup={group} searchQuery={searchQuery} />
                            ))
                        ) : (
                            <div className="text-center py-12 bg-gray-50 border border-gray-200">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    {searchQuery ? `No events matching "${searchQuery}"` : "No classes scheduled for this month"}
                                </p>
                                <button
                                    onClick={clearFilters}
                                    className="mt-4 inline-flex items-center px-3 py-1.5 text-sm text-[#AC1F2D] hover:text-[#8a1924]"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}